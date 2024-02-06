import {
    APIApplicationCommandOptionChoice,
    ButtonInteraction,
    ChatInputCommandInteraction,
    GuildMember,
    VoiceBasedChannel,
} from "discord.js";
import {
    CommandOptionFetchFailedError,
    ExecutedMemberNotFound,
    MemberVoiceChannelNotFoundError,
    MemberVoiceChannelNotJoining,
} from "../errors";
import { RandomCommandOptions } from "../commands/random";
import { ButtonIdDelimiter } from "../constants";

export async function getExecutedMember(
    interaction: ChatInputCommandInteraction | ButtonInteraction
): Promise<GuildMember> {
    const member =
        interaction.member instanceof GuildMember
            ? interaction.member
            : interaction.guild?.members.cache.get(interaction.user.id);
    if (!member) {
        throw new ExecutedMemberNotFound();
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

// ボタンのcustomIdは`buttonId;options`の構造になっている
// その内、buttonIdが一致しているかを調べる
// startWithで比較すると、reroll-weapontypeを押すとreroll-weaponも反応してしまうため
export function checkCustomId(customId: string, targetId: string) {
    let buttonId: string;
    if (customId.includes(ButtonIdDelimiter)) {
        buttonId = customId.substring(0, customId.indexOf(ButtonIdDelimiter));
    } else {
        buttonId = customId;
    }
    return buttonId === targetId;
}

export function buildCustomId(id: string, options?: string) {
    return id + ButtonIdDelimiter + options ?? "";
}

export function generateChoices(
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
