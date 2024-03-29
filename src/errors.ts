export class RainBotBaseError extends Error {}

export class ExecutedMemberNotFound extends RainBotBaseError {
    constructor(message?: string) {
        super(message ?? "Failed to retrieve executed member");
        this.name = "ExecutedMemberNotFound";
        Object.setPrototypeOf(this, ExecutedMemberNotFound.prototype);
    }
}

// random系コマンドの再ロール時、OnlyOneがFalseかつボイスチャンネルに参加していない場合にスロー
// 他の箇所でスローする必要ができたら、新しい例外クラスを作る
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

export class RandomStageElementNotFoundError extends ElementNotFoundError {
    seasonId: number | undefined;

    constructor({
        message,
        seasonId,
    }: {
        message?: string;
        seasonId: number | undefined;
    }) {
        super(message ?? "There is no stage that meets the requirements.");
        this.name = "RandomStageElementNotFoundError";
        this.seasonId = seasonId;
        Object.setPrototypeOf(this, RandomStageElementNotFoundError.prototype);
    }
}

export class CommandOptionFetchFailedError extends RainBotBaseError {
    constructor(message?: string) {
        super(message ?? "Failed to fetch command options.");
        this.name = "CommandOptionFetchFailedError";
        Object.setPrototypeOf(this, CommandOptionFetchFailedError.prototype);
    }
}
