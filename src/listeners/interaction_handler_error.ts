import { Events, Listener, InteractionHandlerError } from "@sapphire/framework";
import { errorEmbed } from "../utils/embed_builder";
import {
    CommandOptionFetchFailedError,
    GuildMemberNotFoundError,
    MemberVoiceChannelNotFoundError,
} from "../errors";
import { ButtonInteraction } from "discord.js";

export class InteractionHandlerErrorListener extends Listener {
    public constructor(context: Listener.Context, options: Listener.Options) {
        super(context, {
            ...options,
            event: Events.InteractionHandlerError,
        });
    }

    public async run(error: unknown, { interaction }: InteractionHandlerError) {
        if (interaction instanceof ButtonInteraction) {
            const embed = (() => {
                if (error instanceof GuildMemberNotFoundError) {
                    return errorEmbed(
                        "実行したユーザーの情報が取得できませんでした。"
                    );
                } else if (error instanceof MemberVoiceChannelNotFoundError) {
                    return errorEmbed(
                        "ボイスチャンネルの情報が取得できませんでした。実行したサーバーでボイスチャンネルに参加しているか確かめてください。"
                    );
                } else if (error instanceof CommandOptionFetchFailedError) {
                    return errorEmbed("オプションの取得に失敗しました。");
                } else if (error instanceof Error) {
                    return errorEmbed(`throw: ${error.message}`);
                } else {
                    return errorEmbed(`throw: ${error}`);
                }
            })();

            if (interaction.deferred || interaction.replied) {
                return interaction.editReply({
                    content: null,
                    embeds: [embed],
                });
            }

            return interaction.reply({
                ephemeral: true,
                embeds: [embed],
            });
        }
    }
}