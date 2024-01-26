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

        const options = {
            subWeaponId,
            specialWeaponId,
            seasonId,
            weaponTypeId,
            single,
        };

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
                return RandomCommand.buildRandomWeaponTypeResult({
                    interaction,
                    options,
                });
            case "rule":
                return RandomCommand.buildRandomRuleResult({ options });
            case "stage":
                return RandomCommand.buildRandomStageResult({
                    options,
                });
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
        if (options.single) {
            embed = this.buildSingleResultEmbed({
                elements: weapons,
                randomCategory: randomCategory,
                commandOptions: options,
                timestamp: timestamp,
            });
        } else {
            const members = await getVoiceChannelMembers({ interaction });
            embed = this.buildResultEmbed({
                members,
                elements: weapons,
                randomCategory: randomCategory,
                commandOptions: options,
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
        const subWeapons = await prisma.subWeapon.findMany({
            where: {
                seasonId: options.seasonId,
            },
        });
        const randomCategory = randomCategoryName.subWeapon;

        if (subWeapons.length < 1) {
            throw new RandomSubWeaponElementNotFoundError({
                seasonId: options.seasonId,
            });
        }

        let embed: EmbedBuilder;
        if (options.single) {
            embed = this.buildSingleResultEmbed({
                elements: subWeapons,
                randomCategory: randomCategory,
                commandOptions: options,
                timestamp: timestamp,
            });
        } else {
            const members = await getVoiceChannelMembers({ interaction });
            embed = this.buildResultEmbed({
                members,
                elements: subWeapons,
                randomCategory: randomCategory,
                commandOptions: options,
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
        const specialWeapons = await prisma.specialWeapon.findMany({
            where: {
                seasonId: options.seasonId,
            },
        });
        const randomCategory = randomCategoryName.specialWeapon;

        if (specialWeapons.length < 1) {
            throw new RandomSpecialWeaponElementNotFoundError({
                seasonId: options.seasonId,
            });
        }

        let embed: EmbedBuilder;
        if (options.single) {
            embed = this.buildSingleResultEmbed({
                elements: specialWeapons,
                randomCategory: randomCategory,
                commandOptions: options,
                timestamp: timestamp,
            });
        } else {
            const members = await getVoiceChannelMembers({ interaction });
            embed = this.buildResultEmbed({
                members,
                elements: specialWeapons,
                randomCategory: randomCategory,
                commandOptions: options,
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
        options,
        timestamp = false,
    }: {
        interaction: Command.ChatInputCommandInteraction | ButtonInteraction;
        options: RandomCommandOptions;
        timestamp?: boolean;
    }) {
        const prisma = container.database;
        const weaponTypes = await prisma.weaponType.findMany();
        const randomCategory = randomCategoryName.weaponType;

        let embed: EmbedBuilder;
        if (options.single) {
            embed = this.buildSingleResultEmbed({
                elements: weaponTypes,
                randomCategory: randomCategory,
                commandOptions: options,
                timestamp: timestamp,
            });
        } else {
            const members = await getVoiceChannelMembers({ interaction });
            embed = this.buildResultEmbed({
                members,
                elements: weaponTypes,
                randomCategory: randomCategory,
                commandOptions: options,
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
        options,
        timestamp = false,
    }: {
        options: RandomCommandOptions;
        timestamp?: boolean;
    }) {
        const prisma = container.database;
        const rules = await prisma.rule.findMany();
        const randomCategory = randomCategoryName.rule;

        const embed = this.buildSingleResultEmbed({
            elements: rules,
            randomCategory: randomCategory,
            commandOptions: options,
            timestamp: timestamp,
        });
        const row = buildRerollActionRow(rerollButtonIds.rule);
        return {
            embeds: [embed],
            components: [row],
        } as BaseMessageOptions;
    }

    public static async buildRandomStageResult({
        options,
        timestamp = false,
    }: {
        options: RandomCommandOptions;
        timestamp?: boolean;
    }) {
        const prisma = container.database;
        const stages = await prisma.stage.findMany({
            where: {
                seasonId: options.seasonId,
            },
        });
        const randomCategory = randomCategoryName.stage;

        if (stages.length < 1) {
            throw new RandomStageWeaponElementNotFoundError({
                seasonId: options.seasonId,
            });
        }

        const embed = this.buildSingleResultEmbed({
            elements: stages,
            randomCategory: randomCategory,
            commandOptions: options,
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
