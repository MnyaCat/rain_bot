import { ApplyOptions } from "@sapphire/decorators";
import { Command, container } from "@sapphire/framework";
import {
    APIApplicationCommandOptionChoice,
    EmbedBuilder,
    VoiceBasedChannel,
} from "discord.js";
import { getMemberVoiceChannel } from "../utils/utils";
import { MemberVoiceChannelNotFoundError } from "../errors";
import { errorEmbed } from "../utils/embed_builder";

const commandId = process.env.RANDOM_COMMAND_ID;
const idHints = commandId != undefined ? [commandId] : undefined;

function getRandomWeapon<T>(weapons: Array<T>): T {
    const index = Math.floor(Math.random() * weapons.length);
    return weapons[index];
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
        const subId = interaction.options.getNumber("sub") ?? undefined;
        const specialId = interaction.options.getNumber("special") ?? undefined;
        const seasonId = interaction.options.getNumber("season") ?? undefined;
        const weaponTypeId =
            interaction.options.getNumber("weapontype") ?? undefined;
        const prisma = container.database;

        const asyncWeapons = async () => {
            switch (subCommand) {
                case "weapon": {
                    return prisma.weapon.findMany({
                        where: {
                            subWeaponId: subId,
                            specialWeaponId: specialId,
                            seasonId: seasonId,
                            weaponTypeId: weaponTypeId,
                        },
                    });
                }
                case "subweapon": {
                    return prisma.subWeapon.findMany();
                }
                case "specialweapon": {
                    return prisma.specialWeapon.findMany();
                }
            }
        };
        const weapons = await asyncWeapons();
        if (subCommand === "weapon" && weapons.length < 1) {
            const filters = [
                await prisma.subWeapon.findFirst({ where: { id: subId } }),
                await prisma.specialWeapon.findFirst({
                    where: { id: specialId },
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

            const embed = errorEmbed(
                "以下の条件に合うブキがありません。\n\n" +
                    filtersTexts.join("\n")
            );
            return interaction.reply({ embeds: [embed] });
        }

        const weaponCategory = new Map([
            ["weapon", "ブキ"],
            ["subweapon", "サブウェポン"],
            ["specialweapon", "スペシャルウェポン"],
        ]).get(subCommand);
        const options = {
            subId,
            specialId,
            seasonId,
            weaponTypeId,
            single,
        };
        const fotterText = JSON.stringify(options);

        const embed = new EmbedBuilder()
            .setTitle(`ランダムな${weaponCategory}を支給します！`)
            .setFooter({ text: fotterText });

        if (single) {
            const randomWeapon = getRandomWeapon(weapons) as {
                id: number;
                name: string;
                seasonId: number;
            };
            embed.setDescription(randomWeapon.name);
        } else {
            let voiceChannel: VoiceBasedChannel;
            try {
                voiceChannel = await getMemberVoiceChannel(interaction);
            } catch (error) {
                if (error instanceof MemberVoiceChannelNotFoundError) {
                    return;
                } else {
                    throw error;
                }
            }
            const memberMentions = voiceChannel.members.map(
                (member) => `<@${member.id}>`
            );
            const results = [];
            for (let i = 0; i < memberMentions.length; i++) {
                const weapon = getRandomWeapon(weapons) as {
                    id: number;
                    name: string;
                    seasonId: number;
                };
                results.push(`${memberMentions[i]}: ${weapon.name}`);
            }
            embed.setDescription(results.join("\n"));
        }
        return interaction.reply({ embeds: [embed] });
    }
}
