import { EmbedBuilder, GuildMember } from "discord.js";
import { errorColor } from "../constants";
import { container } from "@sapphire/framework";
import {
    RandomSpecialWeaponElementNotFoundError,
    RandomStageElementNotFoundError,
    RandomSubWeaponElementNotFoundError,
    RandomWeaponElementNotFoundError,
} from "../errors";
import {
    Weapon,
    SubWeapon,
    SpecialWeapon,
    WeaponType,
    Rule,
    Stage,
} from "../../prisma/generated/splatoon_client";
import { getRandomElement } from "./utils";

export function buildErrorEmbed(description?: string) {
    const embed = new EmbedBuilder()
        .setColor(errorColor)
        .setTitle("エラーが発生しました");
    return description ? embed.setDescription(description) : embed;
}

export async function buildRandomWeaponElementNotFoundEmbed(
    error: RandomWeaponElementNotFoundError
) {
    const prisma = container.database;
    const subWeaponFilter =
        error.subWeaponId != null
            ? await prisma.subWeapon.findFirst({
                  where: { id: error.subWeaponId },
              })
            : null;
    const specialWeaponFilter =
        error.specialWeaponId != null
            ? await prisma.specialWeapon.findFirst({
                  where: { id: error.specialWeaponId },
              })
            : null;
    const seasonFilter =
        error.seasonId != null
            ? await prisma.season.findFirst({ where: { id: error.seasonId } })
            : null;
    const weaponTypeFilter =
        error.weaponTypeId != null
            ? await prisma.weaponType.findFirst({
                  where: { id: error.weaponTypeId },
              })
            : null;
    const options = new Map([
        ["サブウェポン", subWeaponFilter],
        ["スペシャルウェポン", specialWeaponFilter],
        ["シーズン", seasonFilter],
        ["ブキタイプ", weaponTypeFilter],
    ]);
    let errorMessage = "";
    for (const [key, value] of options) {
        if (value != undefined) {
            errorMessage += `- ${key}: **${value.name}**\n`;
        }
    }

    return buildErrorEmbed(
        "以下の条件に合うブキがありません。\n\n" + errorMessage
    );
}

export async function buildRandomSubWeaponElementNotFoundEmbed(
    error: RandomSubWeaponElementNotFoundError
) {
    const prisma = container.database;
    const seasonFilter =
        error.seasonId != null
            ? await prisma.season.findFirst({ where: { id: error.seasonId } })
            : null;
    const options = new Map([["シーズン", seasonFilter]]);
    let errorMessage = "";
    for (const [key, value] of options) {
        if (value != undefined) {
            errorMessage += `- ${key}: **${value.name}**\n`;
        }
    }

    return buildErrorEmbed(
        "以下の条件に合うサブウェポンがありません。\n\n" + errorMessage
    );
}

export async function buildRandomSpecialWeaponElementNotFoundEmbed(
    error: RandomSpecialWeaponElementNotFoundError
) {
    const prisma = container.database;
    const seasonFilter =
        error.seasonId != null
            ? await prisma.season.findFirst({ where: { id: error.seasonId } })
            : null;
    const options = new Map([["シーズン", seasonFilter]]);
    let errorMessage = "";
    for (const [key, value] of options) {
        if (value != undefined) {
            errorMessage += `- ${key}: **${value.name}**\n`;
        }
    }

    return buildErrorEmbed(
        "以下の条件に合うスペシャルウェポンがありません。\n\n" + errorMessage
    );
}

export async function buildRandomStageElementNotFoundEmbed(
    error: RandomStageElementNotFoundError
) {
    const prisma = container.database;
    const seasonFilter =
        error.seasonId != null
            ? await prisma.season.findFirst({ where: { id: error.seasonId } })
            : null;
    const options = new Map([["シーズン", seasonFilter]]);
    let errorMessage = "";
    for (const [key, value] of options) {
        if (value != undefined) {
            errorMessage += `- ${key}: **${value.name}**\n`;
        }
    }

    return buildErrorEmbed(
        "以下の条件に合うステージがありません。\n\n" + errorMessage
    );
}

export function buildResultEmbed<
    T extends Weapon | SubWeapon | SpecialWeapon | WeaponType | Rule | Stage
>({
    members,
    elements,
    randomCategory,
    timestamp = false,
}: {
    members: GuildMember[];
    elements: T[];
    randomCategory: string;
    timestamp?: boolean;
}) {
    const embed = new EmbedBuilder().setTitle(
        `${randomCategory}の抽選結果です！`
    );

    const results = [];
    for (let i = 0; i < members.length; i++) {
        const member = members[i];
        const weapon = getRandomElement(elements);
        const mention = `<@${member.id}>`;
        results.push(`- ${mention}: ${weapon.name}`);
    }
    embed.setDescription(results.join("\n"));

    if (timestamp) {
        embed.setTimestamp(new Date());
    }

    return embed;
}

export function buildSingleResultEmbed<
    T extends Weapon | SubWeapon | SpecialWeapon | WeaponType | Rule | Stage
>({
    elements,
    randomCategory,
    timestamp = false,
}: {
    elements: T[];
    randomCategory: string;
    timestamp?: boolean;
}) {
    const embed = new EmbedBuilder().setTitle(
        `${randomCategory}の抽選結果です！`
    );

    const randomElement = getRandomElement(elements);
    embed.setDescription(randomElement.name);

    if (timestamp) {
        embed.setTimestamp(new Date());
    }

    return embed;
}
