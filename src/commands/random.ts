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
        const subWeapons = await prisma.subWeapon.findMany();
        const subWeaponChoices = subWeapons.map((value) => {
            return {
                name: value.name,
                value: value.id,
            } as APIApplicationCommandOptionChoice<number>;
        });
        const specialWeapons = await prisma.specialWeapon.findMany();
        const specialWeaponChoices = specialWeapons.map((value) => {
            return {
                name: value.name,
                value: value.id,
            } as APIApplicationCommandOptionChoice<number>;
        });
        registry.registerChatInputCommand(
            (builder) =>
                builder //
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
                                    .setName("sub_filter")
                                    .setDescription(
                                        "サブウェポンのフィルター。指定したサブウェポンのブキから選ばれます。"
                                    )
                                    .addChoices(...subWeaponChoices)
                            )
                            .addNumberOption((option) =>
                                option
                                    .setName("special_filter")
                                    .setDescription(
                                        "スペシャルウェポンのフィルター。指定したスペシャルウェポンのブキから選ばれます。"
                                    )
                                    .addChoices(...specialWeaponChoices)
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
        const subId = interaction.options.getNumber("sub_filter") ?? undefined;
        const specialId =
            interaction.options.getNumber("special_filter") ?? undefined;
        const prisma = container.database;

        const asyncWeapons = async () => {
            switch (subCommand) {
                case "weapon": {
                    return prisma.weapon.findMany({
                        where: {
                            subWeaponId: subId,
                            specialWeaponId: specialId,
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
            const subWeapon = await prisma.subWeapon.findFirst({
                where: { id: subId },
            });
            const subFilter =
                subWeapon != null ? `\nサブウェポン: ${subWeapon.name}` : "";
            const specialWeapon = await prisma.specialWeapon.findFirst({
                where: { id: specialId },
            });
            const specialFilter =
                specialWeapon != null
                    ? `\nスペシャルウェポン: ${specialWeapon.name}`
                    : "";
            const embed = errorEmbed(
                `以下の条件に合うブキがありません。${subFilter}${specialFilter}`
            );
            return interaction.reply({ embeds: [embed] });
        }

        const weaponCategory = new Map([
            ["weapon", "ブキ"],
            ["subweapon", "サブウェポン"],
            ["specialweapon", "スペシャルウェポン"],
        ]).get(subCommand);
        const fotterText = `sub_filter: ${subId}, special_filter: ${specialId}, single: ${single}`;

        const embed = new EmbedBuilder()
            .setTitle(`ランダムな${weaponCategory}を支給します！`)
            .setFooter({ text: fotterText });

        if (single) {
            const randomWeapon = getRandomWeapon(weapons);
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
                const weapon = getRandomWeapon(weapons);
                results.push(`${memberMentions[i]}: ${weapon.name}`);
            }
            embed.setDescription(results.join("\n"));
        }
        return interaction.reply({ embeds: [embed] });
    }
}
