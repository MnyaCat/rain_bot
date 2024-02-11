import { Events, Listener, InteractionHandlerError } from "@sapphire/framework";
import { buildErrorEmbed } from "../utils/embed_builder";
import {
    CommandOptionFetchFailedError,
    ExecutedMemberNotFound,
    MemberVoiceChannelNotFoundError,
    MemberVoiceChannelNotJoining,
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
                if (error instanceof ExecutedMemberNotFound) {
                    return buildErrorEmbed(
                        "実行したユーザーの情報が取得できませんでした。"
                    );
                } else if (error instanceof MemberVoiceChannelNotJoining) {
                    return buildErrorEmbed(
                        "`1つのみ抽選する`オプションFalseの場合は、実行したサーバーでボイスチャンネルに参加している状態で実行してください。"
                    );
                } else if (error instanceof MemberVoiceChannelNotFoundError) {
                    return buildErrorEmbed(
                        "ボイスチャンネルの情報が取得できませんでした。実行したサーバーでボイスチャンネルに参加しているか確かめてください。"
                    );
                } else if (error instanceof CommandOptionFetchFailedError) {
                    return buildErrorEmbed("オプションの取得に失敗しました。");
                } else if (error instanceof Error) {
                    return buildErrorEmbed(`throw: ${error.message}`);
                } else {
                    return buildErrorEmbed(`throw: ${error}`);
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
