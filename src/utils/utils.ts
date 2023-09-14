import {
    ChatInputCommandInteraction,
    GuildMember,
    VoiceBasedChannel,
} from "discord.js";
import {
    GuildMemberNotFoundError,
    MemberVoiceChannelNotFoundError,
} from "../errors";
import { errorEmbed } from "./embed_builder";

export async function getExecutedMember(
    interaction: ChatInputCommandInteraction
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
    interaction: ChatInputCommandInteraction
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
