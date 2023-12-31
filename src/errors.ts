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

export class WeaponNotFoundError extends RainBotBaseError {
    constructor(message?: string) {
        super(message ?? "There is no buki that meets the requirements.");
        this.name = "WeaponNotFoundError";
        Object.setPrototypeOf(this, WeaponNotFoundError.prototype);
    }
}

export class CommandOptionFetchFailedError extends RainBotBaseError {
    constructor(message?: string) {
        super(message ?? "Failed to fetch command options.");
        this.name = "CommandOptionFetchFailedError";
        Object.setPrototypeOf(this, CommandOptionFetchFailedError.prototype);
    }
}
