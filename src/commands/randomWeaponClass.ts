import { ApplyOptions } from "@sapphire/decorators";
import { Command, container } from "@sapphire/framework";
import { randomCategoryName, rerollButtonIds } from "../constants";
import {
    ButtonInteraction,
    EmbedBuilder,
    BaseMessageOptions,
} from "discord.js";
import {
    getExecutedMember,
    isVoiceChannelJoinig,
    getVoiceChannelMembers,
    buildRerollActionRow,
    buildCustomId,
} from "../utils/utils";
import {
    buildOnlyOneRandomResultEmbed,
    buildRandomResultEmbed,
} from "../utils/embedBuilder";

const commandId = process.env.RANDOM_WEAPONCLASS_COMMAND_ID;
const idHints = commandId != undefined ? [commandId] : undefined;

const onlyOneOptionName = "onlyone";

@ApplyOptions<Command.Options>({
    name: "random-weaponclass",
})
export class RandomWeaponClassCommand extends Command {
    public override async registerApplicationCommands(
        registry: Command.Registry
    ) {
        registry.registerChatInputCommand(
            (builder) =>
                builder
                    .setName(this.name)
                    .setNameLocalization("ja", "ブキタイプを抽選する")
                    .setDescription(
                        "Raffles a weapon class. raffles based on voice channel members or one if not present."
                    )
                    .setDescriptionLocalization(
                        "ja",
                        "ブキタイプを抽選します。ボイスチャンネルに参加している時は参加しているメンバーの数、入っていない時は1つ抽選します。"
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
        const rawOnlyOne =
            interaction.options.getBoolean(onlyOneOptionName) ?? false;

        const executedMember = await getExecutedMember(interaction);
        const voiceChannelJoining = isVoiceChannelJoinig(executedMember);
        // ボイスチャンネルに参加していない場合は強制的にonlyOneをtrueにする
        const onlyOne = Boolean(rawOnlyOne || !voiceChannelJoining);

        const replyOptions = await buildRandomWeaponClassResult({
            interaction,
            onlyOne: onlyOne,
        });

        interaction.reply(replyOptions);
    }
}

export async function buildRandomWeaponClassResult({
    interaction,
    onlyOne = false,
    timestamp = false,
}: {
    interaction: Command.ChatInputCommandInteraction | ButtonInteraction;
    onlyOne?: boolean;
    timestamp?: boolean;
}) {
    const prisma = container.database;
    const weaponTypes = await prisma.weaponType.findMany();
    const randomCategory = randomCategoryName.weaponType;

    let embed: EmbedBuilder;
    if (onlyOne) {
        embed = buildOnlyOneRandomResultEmbed({
            elements: weaponTypes,
            randomCategory: randomCategory,
            timestamp: timestamp,
        });
    } else {
        const members = await getVoiceChannelMembers({ interaction });
        embed = buildRandomResultEmbed({
            members,
            elements: weaponTypes,
            randomCategory: randomCategory,
            timestamp: timestamp,
        });
    }
    const row = buildRerollActionRow(
        buildCustomId(
            rerollButtonIds.weaponType,
            JSON.stringify({ onlyOne } as RandomWeaponClassOptions)
        )
    );
    return {
        embeds: [embed],
        components: [row],
    } as BaseMessageOptions;
}

export interface RandomWeaponClassOptions {
    onlyOne: boolean;
}
