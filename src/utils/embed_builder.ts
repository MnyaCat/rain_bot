import { EmbedBuilder } from "discord.js";
import { errorColor, mcColor } from "../constants";
import { container } from "@sapphire/framework";
import { RandomCommandOptions } from "../commands/random";

export function errorEmbed(description?: string) {
    const embed = new EmbedBuilder()
        .setColor(errorColor)
        .setTitle("エラーが発生しました");
    return description ? embed.setDescription(description) : embed;
}

export function mcEmbed() {
    return new EmbedBuilder().setColor(mcColor).setFooter({
        text: "from Amethyst Minecraft Server",
        iconURL:
            "https://cdn.discordapp.com/attachments/1142745391746535526/1142750633187885097/d131fe33d01d61256db5df5c3b3733cd.webp",
    });
}

export async function generateItemNotFoundErrorEmbed(
    options: RandomCommandOptions
) {
    const subWeaponId = options.subWeaponId;
    const specialWeaponId = options.specialWeaponId;
    const seasonId = options.seasonId;
    const weaponTypeId = options.weaponTypeId;

    const prisma = container.database;
    const subWeaponFilter =
        subWeaponId != null
            ? await prisma.subWeapon.findFirst({
                  where: { id: subWeaponId },
              })
            : null;
    const specialWeaponFilter =
        specialWeaponId != null
            ? await prisma.specialWeapon.findFirst({
                  where: { id: specialWeaponId },
              })
            : null;
    const seasonFilter =
        seasonId != null
            ? await prisma.season.findFirst({ where: { id: seasonId } })
            : null;
    const weaponTypeFilter =
        weaponTypeId != null
            ? await prisma.weaponType.findFirst({
                  where: { id: weaponTypeId },
              })
            : null;

    const filters = [
        subWeaponFilter,
        specialWeaponFilter,
        seasonFilter,
        weaponTypeFilter,
    ];

    const filterNames = [
        "サブウェポン",
        "スペシャルウェポン",
        "シーズン",
        "ブキタイプ",
    ];

    const filtersTexts = [];
    for (let i = 0; i < filters.length; i++) {
        const filter = filters[i];
        const filterName = filterNames[i];
        if (filter != null) {
            filtersTexts.push(`- ${filterName}: ${filter.name}`);
        }
    }

    return errorEmbed(
        "以下の条件に合うアイテムがありません。\n\n" + filtersTexts.join("\n")
    );
}
