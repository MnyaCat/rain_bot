import { ApplyOptions } from "@sapphire/decorators";
import { Command, container } from "@sapphire/framework";
import {
    buildCustomId,
    buildRerollActionRow,
    // generateChoices,
    getExecutedMember,
    getVoiceChannelMembers,
    isVoiceChannelJoinig,
} from "../utils/utils";
import {
    ButtonInteraction,
    EmbedBuilder,
    BaseMessageOptions,
} from "discord.js";
import { randomCategoryName, rerollButtonIds } from "../constants";
import { RandomSubWeaponElementNotFoundError } from "../errors";
import {
    buildOnlyOneRandomResultEmbed,
    buildRandomResultEmbed,
} from "../utils/embedBuilder";

const commandId = process.env.RANDOM_SUBWEAPON_COMMAND_ID;
const idHints = commandId != undefined ? [commandId] : undefined;

// const seasonOptionName = "season";
const onlyOneOptionName = "onlyone";

@ApplyOptions<Command.Options>({
    name: "random-subweapon",
})
export class RandomSubWeaponCommand extends Command {
    public override async registerApplicationCommands(
        registry: Command.Registry
    ) {
        // const prisma = container.database;
        // const seasonChoices = generateChoices(await prisma.season.findMany());

        registry.registerChatInputCommand(
            (builder) =>
                builder
                    .setName(this.name)
                    .setNameLocalization("ja", "サブウェポンを抽選する")
                    .setDescription(
                        "Raffles a sub weapon. raffles based on voice channel members or one if not present."
                    )
                    .setDescriptionLocalization(
                        "ja",
                        "サブウェポンを抽選します。ボイスチャンネルに参加している時は参加しているメンバーの数、入っていない時は1つ抽選します。"
                    )
                    // v6.x時点でサブウェポンの追加は無いのでコメントアウト
                    /* .addNumberOption((option) =>
                        option
                            .setName(seasonOptionName)
                            .setNameLocalization(
                                "ja",
                                "追加されたシーズンで絞り込む"
                            )
                            .setDescription(
                                "Filters sub weapons by the season in which they were added."
                            )
                            .setDescriptionLocalization(
                                "ja",
                                "ブキを追加されたシーズンで絞り込みます。"
                            )
                            .addChoices(...seasonChoices)
                    ) */
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
        // v6.x時点でサブウェポンの追加は無いのでコメントアウト
        /* const seasonId =
            interaction.options.getNumber(seasonOptionName) ?? undefined; */
        const seasonId = undefined;
        const rawOnlyOne =
            interaction.options.getBoolean(onlyOneOptionName) ?? false;

        const executedMember = await getExecutedMember(interaction);
        const voiceChannelJoining = isVoiceChannelJoinig(executedMember);
        // ボイスチャンネルに参加していない場合は強制的にonlyOneをtrueにする
        const onlyOne = Boolean(rawOnlyOne || !voiceChannelJoining);

        const replyOptions = await buildRandomSubWeaponResult({
            interaction,
            seasonId,
            onlyOne: onlyOne,
        });

        interaction.reply(replyOptions);
    }
}

export async function buildRandomSubWeaponResult({
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
    const subWeapons = await prisma.subWeapon.findMany({
        // v6.x時点でサブウェポンの追加は無いのでコメントアウト
        /* where: {
            seasonId: seasonId,
        }, */
    });
    const randomCategory = randomCategoryName.subWeapon;

    if (subWeapons.length < 1) {
        throw new RandomSubWeaponElementNotFoundError({
            seasonId,
        });
    }

    let embed: EmbedBuilder;
    if (onlyOne) {
        embed = buildOnlyOneRandomResultEmbed({
            elements: subWeapons,
            randomCategory: randomCategory,
            timestamp: timestamp,
        });
    } else {
        const members = await getVoiceChannelMembers({ interaction });
        embed = buildRandomResultEmbed({
            members,
            elements: subWeapons,
            randomCategory: randomCategory,
            timestamp: timestamp,
        });
    }
    const row = buildRerollActionRow(
        buildCustomId(
            rerollButtonIds.subWeapon,
            JSON.stringify({
                seasonId,
                onlyOne,
            } as RandomSubWeaponOptions)
        )
    );
    return {
        embeds: [embed],
        components: [row],
    } as BaseMessageOptions;
}

export interface RandomSubWeaponOptions {
    seasonId?: number;
    onlyOne: boolean;
}
