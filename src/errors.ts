export class RainBotBaseError extends Error {}

export class GuildMemberNotFoundError extends RainBotBaseError {
    constructor(message?: string) {
        super(message ?? "Failed to retrieve GuildMember");
        this.name = "GuildMemberNotFoundError";
        Object.setPrototypeOf(this, GuildMemberNotFoundError.prototype);
    }
}

export class MemberVoiceChannelNotJoining extends RainBotBaseError {
    constructor(message?: string) {
        super(message ?? "Member is not participating in the voice channel.");
        this.name = "MemberVoiceChannelNotJoining";
        Object.setPrototypeOf(this, MemberVoiceChannelNotJoining.prototype);
    }
}

export class MemberVoiceChannelNotFoundError extends RainBotBaseError {
    constructor(message?: string) {
        super(
            message ??
                "Failed to retrieve the voice channel the member is in. It's possible that the member is not currently in a voice channel."
        );
        this.name = "MemberVoiceChannelNotFoundError";
        Object.setPrototypeOf(this, MemberVoiceChannelNotFoundError.prototype);
    }
}

export class ItemNotFoundError extends RainBotBaseError {
    constructor(message?: string) {
        super(message ?? "There is no item that meets the requirements.");
        this.name = "WeaponNotFoundError";
        Object.setPrototypeOf(this, ItemNotFoundError.prototype);
    }
}

export class CommandOptionFetchFailedError extends RainBotBaseError {
    constructor(message?: string) {
        super(message ?? "Failed to fetch command options.");
        this.name = "CommandOptionFetchFailedError";
        Object.setPrototypeOf(this, CommandOptionFetchFailedError.prototype);
    }
}
