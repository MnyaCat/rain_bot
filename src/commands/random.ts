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
import {
    RandomSpecialWeaponElementNotFoundError,
    RandomStageWeaponElementNotFoundError,
    RandomSubWeaponElementNotFoundError,
    RandomWeaponElementNotFoundError,
} from "../errors";
import {
    Rule,
    SpecialWeapon,
    Stage,
    SubWeapon,
    Weapon,
    WeaponType,
} from "../../prisma/generated/splatoon_client";
import { rerollButtonIds, randomCategoryName } from "../constants";

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
                                        "サブウェポンで絞り込む"
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
                                        "スペシャルウェポンで絞り込む"
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
                                        "シーズンで絞り込む"
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
                                        "ブキタイプで絞り込む"
                                    )
                                    .setDescription(
                                        "ブキをブキタイプで絞り込みます。"
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
                                        "シーズンで絞り込む"
                                    )
                                    .setDescription(
                                        "サブウェポンを実装されたシーズンで絞り込みます。"
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
                                        "シーズンで絞り込む"
                                    )
                                    .setDescription(
                                        "スペシャルウェポンを実装されたシーズンで絞り込みます。"
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
                                        "シーズンで絞り込む"
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

        const replyOptions = await this.handleSubCommand({
            subCommand,
            interaction,
        });

        if (replyOptions != undefined) {
            return interaction.reply(replyOptions);
        }
    }

    private async handleSubCommand({
        subCommand,
        interaction,
    }: {
        subCommand: string;
        interaction: Command.ChatInputCommandInteraction;
    }) {
        const single = interaction.options.getBoolean("single") ?? false;
        const subWeaponId = interaction.options.getNumber("sub") ?? undefined;
        const specialWeaponId =
            interaction.options.getNumber("special") ?? undefined;
        const seasonId = interaction.options.getNumber("season") ?? undefined;
        const weaponTypeId =
            interaction.options.getNumber("weapontype") ?? undefined;

        switch (subCommand) {
            case "weapon":
                return RandomCommand.buildRandomWeaponResult({
                    interaction,
                    subWeaponId,
                    specialWeaponId,
                    seasonId,
                    weaponTypeId,
                    single,
                });
            case "subweapon":
                return RandomCommand.buildRandomSubWeaponResult({
                    interaction,
                    seasonId,
                    single,
                });
            case "specialweapon":
                return RandomCommand.buildRandomSpecialWeaponResult({
                    interaction,
                    seasonId,
                    single,
                });
            case "weapontype":
                return RandomCommand.buildRandomWeaponTypeResult({
                    interaction,
                    single,
                });
            case "rule":
                return RandomCommand.buildRandomRuleResult({});
            case "stage":
                return RandomCommand.buildRandomStageResult({ seasonId });
        }
    }

    public static async buildRandomWeaponResult({
        interaction,
        subWeaponId,
        specialWeaponId,
        seasonId,
        weaponTypeId,
        single = false,
        timestamp = false,
    }: {
        interaction: Command.ChatInputCommandInteraction | ButtonInteraction;
        subWeaponId: number | undefined;
        specialWeaponId: number | undefined;
        seasonId: number | undefined;
        weaponTypeId: number | undefined;
        single?: boolean;
        timestamp?: boolean;
    }) {
        const prisma = container.database;
        const weapons = await prisma.weapon.findMany({
            where: {
                subWeaponId: subWeaponId,
                specialWeaponId: specialWeaponId,
                seasonId: seasonId,
                weaponTypeId: weaponTypeId,
            },
        });
        const randomCategory = randomCategoryName.weapon;

        if (weapons.length < 1) {
            throw new RandomWeaponElementNotFoundError({
                subWeaponId,
                specialWeaponId,
                seasonId,
                weaponTypeId,
            });
        }

        let embed: EmbedBuilder;
        if (single) {
            embed = this.buildSingleResultEmbed({
                elements: weapons,
                randomCategory: randomCategory,
                commandOptions: {
                    subWeaponId,
                    specialWeaponId,
                    seasonId,
                    weaponTypeId,
                    single,
                },
                timestamp: timestamp,
            });
        } else {
            const members = await getVoiceChannelMembers({ interaction });
            embed = this.buildResultEmbed({
                members,
                elements: weapons,
                randomCategory: randomCategory,
                commandOptions: {
                    subWeaponId,
                    specialWeaponId,
                    seasonId,
                    weaponTypeId,
                    single,
                },
                timestamp: timestamp,
            });
        }
        const row = buildRerollActionRow(
            rerollButtonIds.weapon +
                ";" +
                JSON.stringify({
                    subWeaponId,
                    specialWeaponId,
                    seasonId,
                    weaponTypeId,
                    single,
                } as RandomWeaponOptions)
        );
        return {
            embeds: [embed],
            components: [row],
        } as BaseMessageOptions;
    }

    public static async buildRandomSubWeaponResult({
        interaction,
        seasonId,
        single = false,
        timestamp = false,
    }: {
        interaction: Command.ChatInputCommandInteraction | ButtonInteraction;
        seasonId: number | undefined;
        single?: boolean;
        timestamp?: boolean;
    }) {
        const prisma = container.database;
        const subWeapons = await prisma.subWeapon.findMany({
            where: {
                seasonId: seasonId,
            },
        });
        const randomCategory = randomCategoryName.subWeapon;

        if (subWeapons.length < 1) {
            throw new RandomSubWeaponElementNotFoundError({
                seasonId: seasonId,
            });
        }

        let embed: EmbedBuilder;
        if (single) {
            embed = this.buildSingleResultEmbed({
                elements: subWeapons,
                randomCategory: randomCategory,
                commandOptions: { seasonId, single },
                timestamp: timestamp,
            });
        } else {
            const members = await getVoiceChannelMembers({ interaction });
            embed = this.buildResultEmbed({
                members,
                elements: subWeapons,
                randomCategory: randomCategory,
                commandOptions: { seasonId, single },
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
        seasonId,
        single = false,
        timestamp = false,
    }: {
        interaction: Command.ChatInputCommandInteraction | ButtonInteraction;
        seasonId: number | undefined;
        single?: boolean;
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
                seasonId: seasonId,
            });
        }

        let embed: EmbedBuilder;
        if (single) {
            embed = this.buildSingleResultEmbed({
                elements: specialWeapons,
                randomCategory: randomCategory,
                commandOptions: { seasonId, single },
                timestamp: timestamp,
            });
        } else {
            const members = await getVoiceChannelMembers({ interaction });
            embed = this.buildResultEmbed({
                members,
                elements: specialWeapons,
                randomCategory: randomCategory,
                commandOptions: { seasonId, single },
                timestamp: timestamp,
            });
        }
        const row = buildRerollActionRow(rerollButtonIds.specialWeapon);
        return {
            embeds: [embed],
            components: [row],
        } as BaseMessageOptions;
    }

    public static async buildRandomWeaponTypeResult({
        interaction,
        single = false,
        timestamp = false,
    }: {
        interaction: Command.ChatInputCommandInteraction | ButtonInteraction;
        single?: boolean;
        timestamp?: boolean;
    }) {
        const prisma = container.database;
        const weaponTypes = await prisma.weaponType.findMany();
        const randomCategory = randomCategoryName.weaponType;

        let embed: EmbedBuilder;
        if (single) {
            embed = this.buildSingleResultEmbed({
                elements: weaponTypes,
                randomCategory: randomCategory,
                commandOptions: { single },
                timestamp: timestamp,
            });
        } else {
            const members = await getVoiceChannelMembers({ interaction });
            embed = this.buildResultEmbed({
                members,
                elements: weaponTypes,
                randomCategory: randomCategory,
                commandOptions: { single },
                timestamp: timestamp,
            });
        }
        const row = buildRerollActionRow(rerollButtonIds.weaponType);
        return {
            embeds: [embed],
            components: [row],
        } as BaseMessageOptions;
    }

    public static async buildRandomRuleResult({
        timestamp = false,
    }: {
        timestamp?: boolean;
    }) {
        const prisma = container.database;
        const rules = await prisma.rule.findMany();
        const randomCategory = randomCategoryName.rule;

        const embed = this.buildSingleResultEmbed({
            elements: rules,
            randomCategory: randomCategory,
            commandOptions: { single: false },
            timestamp: timestamp,
        });
        const row = buildRerollActionRow(rerollButtonIds.rule);
        return {
            embeds: [embed],
            components: [row],
        } as BaseMessageOptions;
    }

    public static async buildRandomStageResult({
        seasonId,
        timestamp = false,
    }: {
        seasonId: number | undefined;
        timestamp?: boolean;
    }) {
        const prisma = container.database;
        const stages = await prisma.stage.findMany({
            where: {
                seasonId: seasonId,
            },
        });
        const randomCategory = randomCategoryName.stage;

        if (stages.length < 1) {
            throw new RandomStageWeaponElementNotFoundError({
                seasonId: seasonId,
            });
        }

        const embed = this.buildSingleResultEmbed({
            elements: stages,
            randomCategory: randomCategory,
            commandOptions: { seasonId, single: false },
            timestamp: timestamp,
        });
        const row = buildRerollActionRow(rerollButtonIds.stage);
        return {
            embeds: [embed],
            components: [row],
        } as BaseMessageOptions;
    }

    private static buildResultEmbed<
        T extends Weapon | SubWeapon | SpecialWeapon | WeaponType | Rule | Stage
    >({
        members,
        elements,
        randomCategory,
        commandOptions,
        timestamp = false,
    }: {
        members: GuildMember[];
        elements: T[];
        randomCategory: string;
        commandOptions: RandomCommandOptions;
        timestamp?: boolean;
    }) {
        const embed = new EmbedBuilder()
            .setTitle(`${randomCategory}の抽選結果です！`)
            // TODO: https://github.com/MnyaCat/rain_bot/issues/28
            .setFooter({ text: JSON.stringify(commandOptions) });

        const results = [];
        for (let i = 0; i < members.length; i++) {
            const member = members[i];
            const weapon = getRandomElement(elements);
            const mention = `<@${member.id}>`;
            results.push(`- ${mention}: ${weapon.name}`);
        }
        embed.setDescription(results.join("\n"));

        if (timestamp) {
            embed.setTimestamp(new Date());
        }

        return embed;
    }

    private static buildSingleResultEmbed<
        T extends Weapon | SubWeapon | SpecialWeapon | WeaponType | Rule | Stage
    >({
        elements,
        randomCategory,
        commandOptions,
        timestamp = false,
    }: {
        elements: T[];
        randomCategory: string;
        commandOptions: RandomCommandOptions;
        timestamp?: boolean;
    }) {
        const embed = new EmbedBuilder()
            .setTitle(`${randomCategory}の抽選結果です！`)
            // TODO: https://github.com/MnyaCat/rain_bot/issues/28
            .setFooter({ text: JSON.stringify(commandOptions) });

        const randomElement = getRandomElement(elements);
        embed.setDescription(randomElement.name);

        if (timestamp) {
            embed.setTimestamp(new Date());
        }

        return embed;
    }
}

export interface RandomCommandOptions {
    subWeaponId?: number;
    specialWeaponId?: number;
    seasonId?: number;
    weaponTypeId?: number;
    single: boolean;
}

export interface RandomWeaponOptions {
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

function getRandomElement<
    T extends Weapon | SubWeapon | SpecialWeapon | WeaponType | Rule | Stage
>(weapons: T[]): T {
    const index = Math.floor(Math.random() * weapons.length);
    return weapons[index];
}

function buildRerollActionRow(customId: string) {
    const rerollButton = new ButtonBuilder()
        .setCustomId(customId)
        .setLabel("再ロール")
        .setStyle(ButtonStyle.Primary);
    return new ActionRowBuilder<ButtonBuilder>().addComponents(rerollButton);
}
