import { EmbedBuilder } from "discord.js";
import { errorColor } from "../constants";
import { container } from "@sapphire/framework";
import {
    RandomSpecialWeaponElementNotFoundError,
    RandomStageElementNotFoundError,
    RandomSubWeaponElementNotFoundError,
    RandomWeaponElementNotFoundError,
} from "../errors";

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
