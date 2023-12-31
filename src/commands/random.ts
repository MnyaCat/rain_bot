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
    time,
} from "discord.js";
import { getVoiceChannelMembers } from "../utils/utils";
import {
    MemberVoiceChannelNotFoundError,
    WeaponNotFoundError,
} from "../errors";
import { errorEmbed } from "../utils/embed_builder";
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
        "ランダムなブキ/サブウェポン/スペシャルウェポンを支給します。ボイスチャンネルに参加している時のみ実行できます。",
    preconditions: ["InVoiceChannel"],
})
export class UserCommand extends Command {
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
                    .setDescription(this.description)
                    .addSubcommand((builder) =>
                        builder
                            .setName("weapon")
                            .setDescription(
                                "ボイスチャンネルのメンバーの数、もしくは1つのランダムなブキを支給します。ボイスチャンネルに参加している時のみ実行できます。"
                            )
                            .addNumberOption((option) =>
                                option
                                    .setName("sub")
                                    .setDescription(
                                        "ブキをサブウェポンで絞り込みます。"
                                    )
                                    .addChoices(...subWeaponChoices)
                            )
                            .addNumberOption((option) =>
                                option
                                    .setName("special")
                                    .setDescription(
                                        "ブキをスペシャルウェポンで絞り込みます。"
                                    )
                                    .addChoices(...specialWeaponChoices)
                            )
                            .addNumberOption((option) =>
                                option
                                    .setName("season")
                                    .setDescription(
                                        "ブキを実装されたシーズンで絞り込みます。"
                                    )
                                    .addChoices(...seasonChoices)
                            )
                            .addNumberOption((option) =>
                                option
                                    .setName("weapontype")
                                    .setDescription(
                                        "ブキをタイプで絞り込みます。"
                                    )
                                    .addChoices(...weaponTypeChoices)
                            )
                            .addBooleanOption((option) =>
                                option
                                    .setName("single")
                                    .setDescription("1つのみ支給するか。")
                            )
                    )
                    .addSubcommand((builder) =>
                        builder
                            .setName("subweapon")
                            .setDescription(
                                "ボイスチャンネルのメンバーの数、もしくは1つのランダムなサブを支給します。ボイスチャンネルに参加している時のみ実行できます。"
                            )
                            .addBooleanOption((option) =>
                                option
                                    .setName("single")
                                    .setDescription("1つのみ支給するか。")
                            )
                    )
                    .addSubcommand((builder) =>
                        builder
                            .setName("specialweapon")
                            .setDescription(
                                "ボイスチャンネルのメンバーの数、もしくは1つのランダムなスペシャルウェポンを支給します。ボイスチャンネルに参加している時のみ実行できます。"
                            )
                            .addBooleanOption((option) =>
                                option
                                    .setName("single")
                                    .setDescription("1つのみ支給するか。")
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
            | "specialweapon";
        const single = interaction.options.getBoolean("single") ?? false;
        const subWeaponId = interaction.options.getNumber("sub") ?? undefined;
        const specialWeaponId =
            interaction.options.getNumber("special") ?? undefined;
        const seasonId = interaction.options.getNumber("season") ?? undefined;
        const weaponTypeId =
            interaction.options.getNumber("weapontype") ?? undefined;

        const options = {
            subCommand,
            subWeaponId,
            specialWeaponId,
            seasonId,
            weaponTypeId,
            single,
        };

        const replyOptions = await (() => {
            try {
                switch (subCommand) {
                    case "weapon":
                        return UserCommand.buildRandomWeaponResult({
                            interaction,
                            options,
                        });
                    case "subweapon":
                        return UserCommand.buildRandomSubWeaponResult({
                            interaction,
                            options,
                        });
                    case "specialweapon":
                        return UserCommand.buildRandomSpecialWeaponResult({
                            interaction,
                            options,
                        });
                }
            } catch (error) {
                if (
                    error instanceof MemberVoiceChannelNotFoundError ||
                    error instanceof WeaponNotFoundError
                ) {
                    return;
                } else {
                    throw error;
                }
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
            const embed = await generateNotFoundErrorEmbed(options);
            interaction.reply({ embeds: [embed], ephemeral: true });
            throw new WeaponNotFoundError();
        }

        let embed: EmbedBuilder;
        if (options.single) {
            const weapon = getRandomWeapon(weapons);
            embed = generateSingleResultEmbed({
                weapon,
                weaponCategory,
                options,
                timestamp: timestamp,
            });
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
            const weapon = getRandomWeapon(weapons);
            embed = generateSingleResultEmbed({
                weapon,
                weaponCategory,
                options,
                timestamp: timestamp,
            });
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
            const weapon = getRandomWeapon(weapons);
            embed = generateSingleResultEmbed({
                weapon,
                weaponCategory,
                options,
                timestamp: timestamp,
            });
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

export interface RandomCommandOptions {
    subWeaponId?: number;
    specialWeaponId?: number;
    seasonId?: number;
    weaponTypeId?: number;
    single: boolean;
}

function getRandomWeapon(weapons: Weapon[] | SubWeapon[] | SpecialWeapon[]): {
    id: number;
    name: string;
    seasonId: number;
} {
    const index = Math.floor(Math.random() * weapons.length);
    return weapons[index];
}

async function generateNotFoundErrorEmbed(options: RandomCommandOptions) {
    const subWeaponId = options.subWeaponId;
    const specialWeaponId = options.specialWeaponId;
    const seasonId = options.seasonId;
    const weaponTypeId = options.weaponTypeId;

    const prisma = container.database;
    const filters = [
        await prisma.subWeapon.findFirst({
            where: { id: subWeaponId },
        }),
        await prisma.specialWeapon.findFirst({
            where: { id: specialWeaponId },
        }),
        await prisma.season.findFirst({ where: { id: seasonId } }),
        await prisma.weaponType.findFirst({
            where: { id: weaponTypeId },
        }),
    ];
    const filterNames = [
        "サブウェポン",
        "スペシャルウェポン",
        "シーズン",
        "ブキタイプ",
    ];

    const filtersTexts = [];
    for (let i = 0; i < filters.length; i++) {
        const filter = filters[i];
        const filterName = filterNames[i];
        if (filter != null) {
            filtersTexts.push(`- ${filterName}: ${filter.name}`);
        }
    }

    return errorEmbed(
        "以下の条件に合うブキがありません。\n\n" + filtersTexts.join("\n")
    );
}

function generateSingleResultEmbed({
    weapon,
    weaponCategory,
    options,
    timestamp,
}: {
    weapon: Weapon | SubWeapon | SpecialWeapon;
    weaponCategory: string;
    options: RandomCommandOptions;
    timestamp?: boolean;
}) {
    const fotterText = JSON.stringify(options);
    let description = weapon.name;
    if (timestamp) {
        description += `\n更新: ${time(new Date(), "T")}`;
    }
    const embed = new EmbedBuilder()
        .setTitle(`ランダムな${weaponCategory}を支給します！`)
        .setDescription(description)
        .setFooter({ text: fotterText });
    return embed;
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
        const weapon = getRandomWeapon(weapons);
        const mention = `<@${member.id}>`;
        results.push(`${mention}: ${weapon.name}`);
    }
    let description = results.join("\n");
    if (timestamp) {
        description += `\n更新: ${time(new Date(), "T")}`;
    }
    const fotterText = JSON.stringify(options);
    const embed = new EmbedBuilder()
        .setTitle(`ランダムな${weaponCategory}を支給します！`)
        .setDescription(description)
        .setFooter({ text: fotterText });
    return embed;
}

function buildRerollActionRow(customId: string) {
    const rerollButton = new ButtonBuilder()
        .setCustomId(customId)
        .setLabel("再ロール")
        .setStyle(ButtonStyle.Primary);
    return new ActionRowBuilder<ButtonBuilder>().addComponents(rerollButton);
}
