import { ApplyOptions } from "@sapphire/decorators";
import { Command, container } from "@sapphire/framework";
import {
    buildCustomId,
    buildRerollActionRow,
    generateChoices,
    getExecutedMember,
    getVoiceChannelMembers,
    isVoiceChannelJoinig,
} from "../utils/utils";
import { RandomWeaponElementNotFoundError } from "../errors";
import {
    EmbedBuilder,
    ButtonInteraction,
    BaseMessageOptions,
} from "discord.js";
import { rerollButtonIds, randomCategoryName } from "../constants";
import {
    buildOnlyOneRandomResultEmbed,
    buildRandomResultEmbed,
} from "../utils/embed_builder";

const commandId = process.env.RANDOM_WEAPON_COMMAND_ID;
const idHints = commandId != undefined ? [commandId] : undefined;

const subWeaponOptionName = "subweapon";
const specialWeaponOptionName = "specialweapon";
const weaponClassOptionName = "weaponclass";
const seasonOptionName = "season";
const onlyOneOptionName = "onlyone";

@ApplyOptions<Command.Options>({
    name: "random-weapon",
})
export class RandomWeaponCommand extends Command {
    public override async registerApplicationCommands(
        registry: Command.Registry
    ) {
        const prisma = container.database;
        const subWeaponChoices = generateChoices(
            await prisma.subWeapon.findMany()
        );
        const specialWeaponChoices = generateChoices(
            await prisma.specialWeapon.findMany()
        );
        const weaponClassChoices = generateChoices(
            await prisma.weaponType.findMany()
        );
        const seasonChoices = generateChoices(await prisma.season.findMany());

        registry.registerChatInputCommand(
            (builder) =>
                builder
                    .setName(this.name)
                    .setNameLocalization("ja", "ブキを抽選する")
                    .setDescription(
                        "Raffles a random weapon. If in a voice channel, it raffles based on members; otherwise, raffles one."
                    )
                    .setDescriptionLocalization(
                        "ja",
                        "ブキを抽選します。ボイスチャンネルに参加している時は参加しているメンバーの数、入っていない時は1つ抽選します。"
                    )
                    .addNumberOption((option) =>
                        option
                            .setName(subWeaponOptionName)
                            .setNameLocalization("ja", "サブウェポンで絞り込む")
                            .setDescription("Filters weapons by sub weapon.")
                            .setDescriptionLocalization(
                                "ja",
                                "ブキをサブウェポンで絞り込みます。"
                            )
                            .addChoices(...subWeaponChoices)
                    )
                    .addNumberOption((option) =>
                        option
                            .setName(specialWeaponOptionName)
                            .setNameLocalization(
                                "ja",
                                "スペシャルウェポンで絞り込む"
                            )
                            .setDescription(
                                "Filters weapons by special weapon."
                            )
                            .setDescriptionLocalization(
                                "ja",
                                "ブキをスペシャルウェポンで絞り込みます。"
                            )
                            .addChoices(...specialWeaponChoices)
                    )
                    .addNumberOption((option) =>
                        option
                            .setName(weaponClassOptionName)
                            .setNameLocalization("ja", "ブキタイプで絞り込む")
                            .setDescription("Filters weapons by weapon type.")
                            .setDescriptionLocalization(
                                "ja",
                                "ブキをブキタイプで絞り込みます。"
                            )
                            .addChoices(...weaponClassChoices)
                    )
                    .addNumberOption((option) =>
                        option
                            .setName(seasonOptionName)
                            .setNameLocalization(
                                "ja",
                                "追加されたシーズンで絞り込む"
                            )
                            .setDescription(
                                "Filters weapons by the season in which they were added."
                            )
                            .setDescriptionLocalization(
                                "ja",
                                "ブキを追加されたシーズンで絞り込みます。"
                            )
                            .addChoices(...seasonChoices)
                    )
                    .addBooleanOption((option) =>
                        option
                            .setName(onlyOneOptionName)
                            .setNameLocalization("ja", "1つのみ抽選する")
                            .setDescription("Raffles only one.")
                            .setDescriptionLocalization(
                                "ja",
                                "1つのみ抽選する。"
                            )
                    ),
            { idHints: idHints }
        );
    }

    public override async chatInputRun(
        interaction: Command.ChatInputCommandInteraction
    ) {
        const subWeaponId =
            interaction.options.getNumber(subWeaponOptionName) ?? undefined;
        const specialWeaponId =
            interaction.options.getNumber(specialWeaponOptionName) ?? undefined;
        const weaponClassId =
            interaction.options.getNumber(weaponClassOptionName) ?? undefined;
        const seasonId =
            interaction.options.getNumber(seasonOptionName) ?? undefined;
        const rawOnlyOne =
            interaction.options.getBoolean(onlyOneOptionName) ?? false;

        const executedMember = await getExecutedMember(interaction);
        const voiceChannelJoining = isVoiceChannelJoinig(executedMember);
        // ボイスチャンネルに参加していない場合は強制的にonlyOneをtrueにする
        const onlyOne = Boolean(rawOnlyOne || !voiceChannelJoining);

        const replyOptions = await buildRandomWeaponResult({
            interaction,
            subWeaponId,
            specialWeaponId,
            weaponClassId,
            seasonId,
            onlyOne: onlyOne,
        });

        interaction.reply(replyOptions);
    }
}

export async function buildRandomWeaponResult({
    interaction,
    subWeaponId,
    specialWeaponId,
    seasonId,
    weaponClassId,
    onlyOne = false,
    timestamp = false,
}: {
    interaction: Command.ChatInputCommandInteraction | ButtonInteraction;
    subWeaponId: number | undefined;
    specialWeaponId: number | undefined;
    seasonId: number | undefined;
    weaponClassId: number | undefined;
    onlyOne?: boolean;
    timestamp?: boolean;
}) {
    const prisma = container.database;
    const weapons = await prisma.weapon.findMany({
        where: {
            subWeaponId: subWeaponId,
            specialWeaponId: specialWeaponId,
            seasonId: seasonId,
            weaponTypeId: weaponClassId,
        },
    });
    const randomCategory = randomCategoryName.weapon;

    if (weapons.length < 1) {
        throw new RandomWeaponElementNotFoundError({
            subWeaponId,
            specialWeaponId,
            seasonId,
            weaponTypeId: weaponClassId,
        });
    }

    let embed: EmbedBuilder;
    if (onlyOne) {
        embed = buildOnlyOneRandomResultEmbed({
            elements: weapons,
            randomCategory: randomCategory,
            timestamp: timestamp,
        });
    } else {
        const members = await getVoiceChannelMembers({ interaction });
        embed = buildRandomResultEmbed({
            members,
            elements: weapons,
            randomCategory: randomCategory,
            timestamp: timestamp,
        });
    }
    const row = buildRerollActionRow(
        buildCustomId(
            rerollButtonIds.weapon,
            JSON.stringify({
                subWeaponId,
                specialWeaponId,
                seasonId,
                weaponClassId,
                onlyOne,
            } as RandomWeaponOptions)
        )
    );
    return {
        embeds: [embed],
        components: [row],
    } as BaseMessageOptions;
}

export interface RandomWeaponOptions {
    subWeaponId?: number;
    specialWeaponId?: number;
    seasonId?: number;
    weaponClassId?: number;
    onlyOne: boolean;
}
