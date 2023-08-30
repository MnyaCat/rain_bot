export class RainBotBaseError extends Error {}

export class GuildMemberNotFoundError extends Error {
    constructor(message?: string) {
        super(message ?? "Failed to retrieve GuildMember");
        this.name = "GuildMemberNotFoundError";
        Object.setPrototypeOf(this, GuildMemberNotFoundError.prototype);
    }
}

export class MemberVoiceChannelNotFoundError extends Error {
    constructor(message?: string) {
        super(
            message ??
                "Failed to retrieve the voice channel the member is in. It's possible that the member is not currently in a voice channel."
        );
        this.name = "MemberVoiceChannelNotFoundError";
        Object.setPrototypeOf(this, MemberVoiceChannelNotFoundError.prototype);
    }
}
