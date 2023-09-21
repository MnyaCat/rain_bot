import { Precondition } from "@sapphire/framework";
import {
    ChatInputCommandInteraction,
    ContextMenuCommandInteraction,
    GuildMember,
    Message,
} from "discord.js";

export class UserPrecondition extends Precondition {
    public override messageRun(message: Message) {
        return this.checkInVoiceChannel(message.member);
    }

    public override chatInputRun(interaction: ChatInputCommandInteraction) {
        const member =
            interaction.member instanceof GuildMember
                ? interaction.member
                : interaction.guild?.members.cache.get(interaction.user.id);
        return this.checkInVoiceChannel(member);
    }

    public override contextMenuRun(interaction: ContextMenuCommandInteraction) {
        const member =
            interaction.member instanceof GuildMember
                ? interaction.member
                : interaction.guild?.members.cache.get(interaction.user.id);
        return this.checkInVoiceChannel(member);
    }

    private checkInVoiceChannel(member: GuildMember | null | undefined) {
        const channel = member?.voice.channel;
        return channel
            ? this.ok()
            : this.error({
                  message:
                      "このコマンドは、実行したサーバーと同じボイスチャンネルに参加している時のみ実行できます。",
              });
    }
}

declare module "@sapphire/framework" {
    interface Preconditions {
        InVoiceChannel: never;
    }
}
