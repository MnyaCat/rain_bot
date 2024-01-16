import { ApplyOptions } from "@sapphire/decorators";
import { Command, container } from "@sapphire/framework";
import {
    APIApplicationCommandOptionChoice,
    ActionRowBuilder,
    BaseMessageOptions,
    ButtonBuilder,
    ButtonInteraction,
    ButtonStyle,
    EmbedBuilder,
    GuildMember,
} from "discord.js";
import { getVoiceChannelMembers } from "../utils/utils";
import { WeaponNotFoundError } from "../errors";
import {
    SpecialWeapon,
    SubWeapon,
    Weapon,
} from "../../prisma/generated/splatoon_client";
import { rerollButtonIds, weaponCategoryName } from "../constants";

const commandId = process.env.RANDOM_COMMAND_ID;
const idHints = commandId != undefined ? [commandId] : undefined;

@ApplyOptions<Command.Options>({
    name: "random",
    description:
        "ランダムなブキ/サブウェポン/スペシャルウェポン/ブキタイプ/ルール/ステージを抽選します。ボイスチャンネルに参加している時のみ実行できます。",
    preconditions: ["InVoiceChannel"],
})
export class RandomCommand extends Command {
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
        const seasonChoices = generateChoices(await prisma.season.findMany());
        const weaponTypeChoices = generateChoices(
            await prisma.weaponType.findMany()
        );
        registry.registerChatInputCommand(
            (builder) =>
                builder
                    .setName(this.name)
                    .setNameLocalization("ja", "ランダム")
                    .setDescription(this.description)
                    .addSubcommand((builder) =>
                        builder
                            .setName("weapon")
                            .setNameLocalization("ja", "ブキ")
                            .setDescription(
                                "ボイスチャンネルのメンバーの数、もしくは1つのランダムなブキを抽選します。ボイスチャンネルに参加している時のみ実行できます。"
                            )
                            .addNumberOption((option) =>
                                option
                                    .setName("sub")
                                    .setNameLocalization(
                                        "ja",
                                        "サブウェポンのフィルター"
                                    )
                                    .setDescription(
                                        "ブキをサブウェポンで絞り込みます。"
                                    )
                                    .addChoices(...subWeaponChoices)
                            )
                            .addNumberOption((option) =>
                                option
                                    .setName("special")
                                    .setNameLocalization(
                                        "ja",
                                        "スペシャルウェポンのフィルター"
                                    )
                                    .setDescription(
                                        "ブキをスペシャルウェポンで絞り込みます。"
                                    )
                                    .addChoices(...specialWeaponChoices)
                            )
                            .addNumberOption((option) =>
                                option
                                    .setName("season")
                                    .setNameLocalization(
                                        "ja",
                                        "シーズンのフィルター"
                                    )
                                    .setDescription(
                                        "ブキを実装されたシーズンで絞り込みます。"
                                    )
                                    .addChoices(...seasonChoices)
                            )
                            .addNumberOption((option) =>
                                option
                                    .setName("weapontype")
                                    .setNameLocalization(
                                        "ja",
                                        "ブキタイプのフィルター"
                                    )
                                    .setDescription(
                                        "ブキをタイプで絞り込みます。"
                                    )
                                    .addChoices(...weaponTypeChoices)
                            )
                            .addBooleanOption((option) =>
                                option
                                    .setName("single")
                                    .setNameLocalization(
                                        "ja",
                                        "1つのみ抽選する"
                                    )
                                    .setDescription("1つのみ抽選するか。")
                            )
                    )
                    .addSubcommand((builder) =>
                        builder
                            .setName("subweapon")
                            .setNameLocalization("ja", "サブウェポン")
                            .setDescription(
                                "ボイスチャンネルのメンバーの数、もしくは1つのランダムなサブを抽選します。ボイスチャンネルに参加している時のみ実行できます。"
                            )
                            .addNumberOption((option) =>
                                option
                                    .setName("season")
                                    .setNameLocalization(
                                        "ja",
                                        "シーズンのフィルター"
                                    )
                                    .setDescription(
                                        "ステージを実装されたシーズンで絞り込みます。"
                                    )
                                    .addChoices(...seasonChoices)
                            )
                            .addBooleanOption((option) =>
                                option
                                    .setName("single")
                                    .setNameLocalization(
                                        "ja",
                                        "1つのみ抽選する"
                                    )
                                    .setDescription("1つのみ抽選するか。")
                            )
                    )
                    .addSubcommand((builder) =>
                        builder
                            .setName("specialweapon")
                            .setNameLocalization("ja", "スペシャルウェポン")
                            .setDescription(
                                "ボイスチャンネルのメンバーの数、もしくは1つのランダムなスペシャルウェポンを抽選します。ボイスチャンネルに参加している時のみ実行できます。"
                            )
                            .addNumberOption((option) =>
                                option
                                    .setName("season")
                                    .setNameLocalization(
                                        "ja",
                                        "シーズンのフィルター"
                                    )
                                    .setDescription(
                                        "ステージを実装されたシーズンで絞り込みます。"
                                    )
                                    .addChoices(...seasonChoices)
                            )
                            .addBooleanOption((option) =>
                                option
                                    .setName("single")
                                    .setNameLocalization(
                                        "ja",
                                        "1つのみ抽選する"
                                    )
                                    .setDescription("1つのみ抽選するか。")
                            )
                    )
                    .addSubcommand((builder) =>
                        builder
                            .setName("weapontype")
                            .setNameLocalization("ja", "ブキタイプ")
                            .setDescription(
                                "ボイスチャンネルのメンバーの数、もしくは1つのランダムなブキタイプを抽選します。ボイスチャンネルに参加している時のみ実行できます。"
                            )
                    )
                    .addSubcommand((builder) =>
                        builder
                            .setName("rule")
                            .setNameLocalization("ja", "ルール")
                            .setDescription("ランダムなルールを抽選します。")
                    )
                    .addSubcommand((builder) =>
                        builder
                            .setName("stage")
                            .setNameLocalization("ja", "ステージ")
                            .setDescription("ランダムなステージを抽選します。")
                            .addNumberOption((option) =>
                                option
                                    .setName("season")
                                    .setNameLocalization(
                                        "ja",
                                        "シーズンのフィルター"
                                    )
                                    .setDescription(
                                        "ステージを実装されたシーズンで絞り込みます。"
                                    )
                                    .addChoices(...seasonChoices)
                            )
                    ),
            { idHints: idHints }
        );
    }

    public override async chatInputRun(
        interaction: Command.ChatInputCommandInteraction
    ) {
        const subCommand = interaction.options.getSubcommand() as
            | "weapon"
            | "subweapon"
            | "specialweapon"
            | "weapontype"
            | "rule"
            | "stage";
        const single = interaction.options.getBoolean("single") ?? false;
        const subWeaponId = interaction.options.getNumber("sub") ?? undefined;
        const specialWeaponId =
            interaction.options.getNumber("special") ?? undefined;
        const seasonId = interaction.options.getNumber("season") ?? undefined;
        const weaponTypeId =
            interaction.options.getNumber("weapontype") ?? undefined;

        const options = {
            subWeaponId,
            specialWeaponId,
            seasonId,
            weaponTypeId,
            single,
        };

        // TODO: 各コマンドに必要なだけのオプションを渡す(=RandomCommandOptionsを使わない)
        const replyOptions = await (() => {
            switch (subCommand) {
                case "weapon":
                    return RandomCommand.buildRandomWeaponResult({
                        interaction,
                        options,
                    });
                case "subweapon":
                    return RandomCommand.buildRandomSubWeaponResult({
                        interaction,
                        options,
                    });
                case "specialweapon":
                    return RandomCommand.buildRandomSpecialWeaponResult({
                        interaction,
                        options,
                    });
                case "weapontype":
                    return RandomCommand.buildRandomWeaponTypeResult();
                case "rule":
                    return RandomCommand.buildRandomRuleResult();
                case "stage":
                    return RandomCommand.buildRandomStageResult();
            }
        })();

        if (replyOptions != undefined) {
            return interaction.reply(replyOptions);
        }
    }

    public static async buildRandomWeaponResult({
        interaction,
        options,
        timestamp = false,
    }: {
        interaction: Command.ChatInputCommandInteraction | ButtonInteraction;
        options: RandomCommandOptions;
        timestamp?: boolean;
    }) {
        const prisma = container.database;
        const weapons = await prisma.weapon.findMany({
            where: {
                subWeaponId: options.subWeaponId,
                specialWeaponId: options.specialWeaponId,
                seasonId: options.seasonId,
                weaponTypeId: options.weaponTypeId,
            },
        });
        const weaponCategory = weaponCategoryName.weapon;

        if (weapons.length < 1) {
            throw new WeaponNotFoundError();
        }

        let embed: EmbedBuilder;
        if (options.single) {
            const weapon = getRandomElement(weapons);
            embed = new EmbedBuilder()
                .setTitle(`${weaponCategory}の抽選結果です！`)
                .setDescription(weapon.name)
                .setFooter({ text: JSON.stringify(options) });
            if (timestamp) {
                embed.setTimestamp(new Date());
            }
        } else {
            const members = await getVoiceChannelMembers({ interaction });
            embed = generateResultEmbed({
                members,
                weapons,
                weaponCategory,
                options,
                timestamp: timestamp,
            });
        }
        const row = buildRerollActionRow(rerollButtonIds.weapon);
        return {
            embeds: [embed],
            components: [row],
        } as BaseMessageOptions;
    }

    public static async buildRandomSubWeaponResult({
        interaction,
        options,
        timestamp = false,
    }: {
        interaction: Command.ChatInputCommandInteraction | ButtonInteraction;
        options: RandomCommandOptions;
        timestamp?: boolean;
    }) {
        const prisma = container.database;
        const weapons = await prisma.subWeapon.findMany();
        const weaponCategory = weaponCategoryName.subWeapon;

        let embed: EmbedBuilder;
        if (options.single) {
            const weapon = getRandomElement(weapons);
            embed = new EmbedBuilder()
                .setTitle(`${weaponCategory}の抽選結果です！`)
                .setDescription(weapon.name)
                .setFooter({ text: JSON.stringify(options) });
            if (timestamp) {
                embed.setTimestamp(new Date());
            }
        } else {
            const members = await getVoiceChannelMembers({ interaction });
            embed = generateResultEmbed({
                members,
                weapons,
                weaponCategory,
                options,
                timestamp: timestamp,
            });
        }
        const row = buildRerollActionRow(rerollButtonIds.subWeapon);
        return {
            embeds: [embed],
            components: [row],
        } as BaseMessageOptions;
    }

    public static async buildRandomSpecialWeaponResult({
        interaction,
        options,
        timestamp = false,
    }: {
        interaction: Command.ChatInputCommandInteraction | ButtonInteraction;
        options: RandomCommandOptions;
        timestamp?: boolean;
    }) {
        const prisma = container.database;
        const weapons = await prisma.specialWeapon.findMany();
        const weaponCategory = weaponCategoryName.specialWeapon;

        let embed: EmbedBuilder;
        if (options.single) {
            const weapon = getRandomElement(weapons);
            embed = new EmbedBuilder()
                .setTitle(`${weaponCategory}の抽選結果です！`)
                .setDescription(weapon.name)
                .setFooter({ text: JSON.stringify(options) });
            if (timestamp) {
                embed.setTimestamp(new Date());
            }
        } else {
            const members = await getVoiceChannelMembers({ interaction });
            embed = generateResultEmbed({
                members,
                weapons,
                weaponCategory,
                options,
                timestamp: timestamp,
            });
        }
        const row = buildRerollActionRow(rerollButtonIds.specialWeapon);
        return {
            embeds: [embed],
            components: [row],
        } as BaseMessageOptions;
    }
}

export interface RandomCommandOptions {
    subWeaponId?: number;
    specialWeaponId?: number;
    seasonId?: number;
    weaponTypeId?: number;
    single: boolean;
}

function generateChoices(
    weapons: {
        id: number;
        name: string;
    }[]
) {
    return weapons.map((weapon) => {
        return {
            name: weapon.name,
            value: weapon.id,
        } as APIApplicationCommandOptionChoice<number>;
    });
}

function getRandomElement(weapons: Weapon[] | SubWeapon[] | SpecialWeapon[]): {
    id: number;
    name: string;
    seasonId: number;
} {
    const index = Math.floor(Math.random() * weapons.length);
    return weapons[index];
}

function generateResultEmbed({
    members,
    weapons,
    weaponCategory,
    options,
    timestamp = false,
}: {
    members: GuildMember[];
    weapons: Weapon[] | SubWeapon[] | SpecialWeapon[];
    weaponCategory: string;
    options: RandomCommandOptions;
    timestamp?: boolean;
}) {
    const results: string[] = [];
    for (let i = 0; i < members.length; i++) {
        const member = members[i];
        const weapon = getRandomElement(weapons);
        const mention = `<@${member.id}>`;
        results.push(`- ${mention}: ${weapon.name}`);
    }
    const fotterText = JSON.stringify(options);
    const embed = new EmbedBuilder()
        .setTitle(`${weaponCategory}の抽選結果です！`)
        .setDescription(results.join("\n"))
        .setFooter({ text: fotterText });
    if (timestamp) {
        embed.setTimestamp(new Date());
    }
    return embed;
}

function buildRerollActionRow(customId: string) {
    const rerollButton = new ButtonBuilder()
        .setCustomId(customId)
        .setLabel("再ロール")
        .setStyle(ButtonStyle.Primary);
    return new ActionRowBuilder<ButtonBuilder>().addComponents(rerollButton);
}
