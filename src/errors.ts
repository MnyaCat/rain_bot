export class RainBotBaseError extends Error {}

// TODO: これを継承したExecutedMemberNotFoundを作る
// 実際には実行したユーザーが取得できなかった時に投げられているので
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

export class ElementNotFoundError extends RainBotBaseError {
    constructor(message?: string) {
        super(message ?? "There is no element that meets the requirements.");
        this.name = "ElementNotFoundError";
        Object.setPrototypeOf(this, ElementNotFoundError.prototype);
    }
}

export class RandomWeaponElementNotFoundError extends ElementNotFoundError {
    subWeaponId: number | undefined;
    specialWeaponId: number | undefined;
    seasonId: number | undefined;
    weaponTypeId: number | undefined;

    constructor({
        message,
        subWeaponId,
        specialWeaponId,
        seasonId,
        weaponTypeId,
    }: {
        message?: string;
        subWeaponId: number | undefined;
        specialWeaponId: number | undefined;
        seasonId: number | undefined;
        weaponTypeId: number | undefined;
    }) {
        super(message ?? "There is no weapon that meets the requirements.");
        this.name = "RandomWeaponElementNotFoundError";
        this.subWeaponId = subWeaponId;
        this.specialWeaponId = specialWeaponId;
        this.seasonId = seasonId;
        this.weaponTypeId = weaponTypeId;
        Object.setPrototypeOf(this, RandomWeaponElementNotFoundError.prototype);
    }
}

export class RandomSubWeaponElementNotFoundError extends ElementNotFoundError {
    seasonId: number | undefined;

    constructor({
        message,
        seasonId,
    }: {
        message?: string;
        seasonId: number | undefined;
    }) {
        super(message ?? "There is no sub weapon that meets the requirements.");
        this.name = "RandomSubWeaponElementNotFoundError";
        this.seasonId = seasonId;
        Object.setPrototypeOf(
            this,
            RandomSubWeaponElementNotFoundError.prototype
        );
    }
}

export class RandomSpecialWeaponElementNotFoundError extends ElementNotFoundError {
    seasonId: number | undefined;

    constructor({
        message,
        seasonId,
    }: {
        message?: string;
        seasonId: number | undefined;
    }) {
        super(
            message ?? "There is no special weapon that meets the requirements."
        );
        this.name = "RandomSpecialWeaponElementNotFoundError";
        this.seasonId = seasonId;
        Object.setPrototypeOf(
            this,
            RandomSpecialWeaponElementNotFoundError.prototype
        );
    }
}

export class RandomStageWeaponElementNotFoundError extends ElementNotFoundError {
    seasonId: number | undefined;

    constructor({
        message,
        seasonId,
    }: {
        message?: string;
        seasonId: number | undefined;
    }) {
        super(message ?? "There is no stage that meets the requirements.");
        this.name = "RandomStageWeaponElementNotFoundError";
        this.seasonId = seasonId;
        Object.setPrototypeOf(
            this,
            RandomStageWeaponElementNotFoundError.prototype
        );
    }
}

export class CommandOptionFetchFailedError extends RainBotBaseError {
    constructor(message?: string) {
        super(message ?? "Failed to fetch command options.");
        this.name = "CommandOptionFetchFailedError";
        Object.setPrototypeOf(this, CommandOptionFetchFailedError.prototype);
    }
}
