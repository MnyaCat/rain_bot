import {
    ButtonInteraction,
    ChatInputCommandInteraction,
    GuildMember,
    VoiceBasedChannel,
} from "discord.js";
import {
    CommandOptionFetchFailedError,
    GuildMemberNotFoundError,
    MemberVoiceChannelNotFoundError,
} from "../errors";
import { errorEmbed } from "./embed_builder";
import { RandomCommandOptions } from "../commands/random";

export async function getExecutedMember(
    interaction: ChatInputCommandInteraction | ButtonInteraction
): Promise<GuildMember> {
    const member =
        interaction.member instanceof GuildMember
            ? interaction.member
            : interaction.guild?.members.cache.get(interaction.user.id);
    if (!member) {
        const embed = errorEmbed(
            "実行したユーザーの`GuildMember`情報の取得に失敗しました。"
        );
        await interaction.reply({ embeds: [embed], ephemeral: true });
        throw new GuildMemberNotFoundError();
    } else {
        return member;
    }
}

export async function getVoiceChannel(
    interaction: ChatInputCommandInteraction | ButtonInteraction
): Promise<VoiceBasedChannel> {
    const member = await getExecutedMember(interaction);
    const voiceChannel = member.voice.channel;
    if (!voiceChannel) {
        const embed = errorEmbed(
            "実行したユーザーが参加している`VoiceBasedChannel`情報の取得に失敗しました。"
        );
        await interaction.reply({ embeds: [embed], ephemeral: true });
        throw new MemberVoiceChannelNotFoundError();
    } else {
        return voiceChannel;
    }
}

export async function getVoiceChannelMembers({
    interaction,
    includeBot = false,
}: {
    interaction: ChatInputCommandInteraction | ButtonInteraction;
    includeBot: boolean;
}): Promise<GuildMember[]> {
    const voiceChannel = await getVoiceChannel(interaction);
    if (includeBot) {
        return [...voiceChannel.members.values()];
    } else {
        return [...voiceChannel.members.values()].filter(
            (member) => !member.user.bot
        );
    }
}

export async function getRandomCommandOptions(interaction: ButtonInteraction) {
    const optionsJson = interaction.message.embeds[0].footer?.text;
    if (optionsJson == undefined) {
        const embed = errorEmbed("オプションが取得できませんでした。");
        interaction.reply({ embeds: [embed] });
        throw new CommandOptionFetchFailedError();
    }
    return JSON.parse(optionsJson) as RandomCommandOptions;
}
