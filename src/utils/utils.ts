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
    MemberVoiceChannelNotJoining,
} from "../errors";
import { RandomCommandOptions } from "../commands/random";

export async function getExecutedMember(
    interaction: ChatInputCommandInteraction | ButtonInteraction
): Promise<GuildMember> {
    const member =
        interaction.member instanceof GuildMember
            ? interaction.member
            : interaction.guild?.members.cache.get(interaction.user.id);
    if (!member) {
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
    includeBot?: boolean;
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

export function checkVoiceChannelJoining(member: GuildMember) {
    const channel = member?.voice.channel;
    if (!channel) {
        throw new MemberVoiceChannelNotJoining();
    }
}

export async function getRandomCommandOptions(interaction: ButtonInteraction) {
    const optionsJson = interaction.message.embeds[0].footer?.text;
    if (optionsJson == undefined) {
        throw new CommandOptionFetchFailedError();
    }
    return JSON.parse(optionsJson) as RandomCommandOptions;
}

export function shuffleArray<T>(array: T[]): T[] {
    // membersに変更を加えないためにシャローコピー
    const shuffledArray = [...array];
    // Fisher-Yatesアルゴリズムを使ったシャッフル
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }

    return shuffledArray;
}
