import { EmbedBuilder } from "discord.js";
import { errorColor, mcColor } from "../constants";

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
