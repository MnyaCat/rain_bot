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
import {
    BaseMessageOptions,
    ButtonInteraction,
    EmbedBuilder,
} from "discord.js";
import { randomCategoryName, rerollButtonIds } from "../constants";
import { RandomSpecialWeaponElementNotFoundError } from "../errors";
import {
    buildOnlyOneRandomResultEmbed,
    buildRandomResultEmbed,
} from "../utils/embedBuilder";

const commandId = process.env.RANDOM_SPECIALWEAPON_COMMAND_ID;
const idHints = commandId != undefined ? [commandId] : undefined;

const seasonOptionName = "season";
const onlyOneOptionName = "onlyone";

@ApplyOptions<Command.Options>({
    name: "random-specialweapon",
})
export class RandomSpecialWeaponCommand extends Command {
    public override async registerApplicationCommands(
        registry: Command.Registry
    ) {
        const prisma = container.database;
        const seasonChoices = generateChoices(await prisma.season.findMany());

        registry.registerChatInputCommand(
            (builder) =>
                builder
                    .setName(this.name)
                    .setNameLocalization("ja", "スペシャルウェポンを抽選する")
                    .setDescription(
                        "Raffles a special weapon. raffles based on voice channel members or one if not present."
                    )
                    .setDescriptionLocalization(
                        "ja",
                        "スペシャルウェポンを抽選します。ボイスチャンネルに参加している時は参加しているメンバーの数、入っていない時は1つ抽選します。"
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
                                "スペシャルウェポンを追加されたシーズンで絞り込みます。"
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
        const seasonId =
            interaction.options.getNumber(seasonOptionName) ?? undefined;
        const rawOnlyOne =
            interaction.options.getBoolean(onlyOneOptionName) ?? false;

        const executedMember = await getExecutedMember(interaction);
        const voiceChannelJoining = isVoiceChannelJoinig(executedMember);
        // ボイスチャンネルに参加していない場合は強制的にonlyOneをtrueにする
        const onlyOne = Boolean(rawOnlyOne || !voiceChannelJoining);

        const replyOptions = await buildRandomSpecialWeaponResult({
            interaction,
            seasonId,
            onlyOne: onlyOne,
        });

        interaction.reply(replyOptions);
    }
}

export async function buildRandomSpecialWeaponResult({
    interaction,
    seasonId,
    onlyOne = false,
    timestamp = false,
}: {
    interaction: Command.ChatInputCommandInteraction | ButtonInteraction;
    seasonId: number | undefined;
    onlyOne?: boolean;
    timestamp?: boolean;
}) {
    const prisma = container.database;
    const specialWeapons = await prisma.specialWeapon.findMany({
        where: {
            seasonId: seasonId,
        },
    });
    const randomCategory = randomCategoryName.specialWeapon;

    if (specialWeapons.length < 1) {
        throw new RandomSpecialWeaponElementNotFoundError({
            seasonId,
        });
    }

    let embed: EmbedBuilder;
    if (onlyOne) {
        embed = buildOnlyOneRandomResultEmbed({
            elements: specialWeapons,
            randomCategory: randomCategory,
            timestamp: timestamp,
        });
    } else {
        const members = await getVoiceChannelMembers({ interaction });
        embed = buildRandomResultEmbed({
            members,
            elements: specialWeapons,
            randomCategory: randomCategory,
            timestamp: timestamp,
        });
    }
    const row = buildRerollActionRow(
        buildCustomId(
            rerollButtonIds.specialWeapon,
            JSON.stringify({
                seasonId,
                onlyOne,
            } as RandomSpecialWeaponOptions)
        )
    );
    return {
        embeds: [embed],
        components: [row],
    } as BaseMessageOptions;
}

export interface RandomSpecialWeaponOptions {
    seasonId?: number;
    onlyOne: boolean;
}
