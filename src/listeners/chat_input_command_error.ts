import {
    Events,
    Listener,
    ChatInputCommandErrorPayload,
} from "@sapphire/framework";
import {
    buildErrorEmbed,
    buildRandomSpecialWeaponElementNotFoundEmbed,
    buildRandomStageElementNotFoundEmbed,
    buildRandomSubWeaponElementNotFoundEmbed,
    buildRandomWeaponElementNotFoundEmbed,
} from "../utils/embed_builder";
import {
    ExecutedMemberNotFound,
    MemberVoiceChannelNotFoundError,
    RandomWeaponElementNotFoundError,
    RandomSubWeaponElementNotFoundError,
    RandomSpecialWeaponElementNotFoundError,
    RandomStageElementNotFoundError,
} from "../errors";

export class ChatInputCommandErrorListener extends Listener {
    public constructor(context: Listener.Context, options: Listener.Options) {
        super(context, {
            ...options,
            event: Events.ChatInputCommandError,
        });
    }

    public async run(
        error: unknown,
        { interaction }: ChatInputCommandErrorPayload
    ) {
        const embed = await (() => {
            if (error instanceof ExecutedMemberNotFound) {
                return buildErrorEmbed(
                    "実行したユーザーの情報が取得できませんでした。"
                );
            } else if (error instanceof MemberVoiceChannelNotFoundError) {
                return buildErrorEmbed(
                    "ボイスチャンネルの情報が取得できませんでした。実行したサーバーでボイスチャンネルに参加しているか確かめてください。"
                );
            } else if (error instanceof RandomWeaponElementNotFoundError) {
                return buildRandomWeaponElementNotFoundEmbed(error);
            } else if (error instanceof RandomSubWeaponElementNotFoundError) {
                return buildRandomSubWeaponElementNotFoundEmbed(error);
            } else if (
                error instanceof RandomSpecialWeaponElementNotFoundError
            ) {
                return buildRandomSpecialWeaponElementNotFoundEmbed(error);
            } else if (error instanceof RandomStageElementNotFoundError) {
                return buildRandomStageElementNotFoundEmbed(error);
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
