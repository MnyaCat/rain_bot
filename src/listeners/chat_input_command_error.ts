import {
    Events,
    Listener,
    ChatInputCommandErrorPayload,
} from "@sapphire/framework";
import {
    buildErrorEmbed,
    buildRandomSpecialWeaponElementNotFoundEmbed,
    buildRandomSubWeaponElementNotFoundEmbed,
    buildRandomWeaponElementNotFoundEmbed,
    generateItemNotFoundErrorEmbed,
} from "../utils/embed_builder";
import {
    ExecutedMemberNotFound,
    MemberVoiceChannelNotFoundError,
    ElementNotFoundError,
    RandomWeaponElementNotFoundError,
    RandomSubWeaponElementNotFoundError,
    RandomSpecialWeaponElementNotFoundError,
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
            const subWeaponId =
                interaction.options.getNumber("sub") ?? undefined;
            const specialWeaponId =
                interaction.options.getNumber("special") ?? undefined;
            const seasonId =
                interaction.options.getNumber("season") ?? undefined;
            const weaponTypeId =
                interaction.options.getNumber("weapontype") ?? undefined;
            const single = interaction.options.getBoolean("single") ?? false;

            const randomCommandOptions = {
                subWeaponId,
                specialWeaponId,
                seasonId,
                weaponTypeId,
                single,
            };

            if (error instanceof ExecutedMemberNotFound) {
                return buildErrorEmbed(
                    "実行したユーザーの情報が取得できませんでした。"
                );
            } else if (error instanceof MemberVoiceChannelNotFoundError) {
                return buildErrorEmbed(
                    "ボイスチャンネルの情報が取得できませんでした。実行したサーバーでボイスチャンネルに参加しているか確かめてください。"
                );
                // TODO: ElementNotFoundErrorを継承した例外ごとに処理を分ける
                // エラーメッセージのEmbedをgenerateItemNotFoundErrorEmbedで一纏めにしない
            } else if (error instanceof RandomWeaponElementNotFoundError) {
                return buildRandomWeaponElementNotFoundEmbed(error);
            } else if (error instanceof RandomSubWeaponElementNotFoundError) {
                return buildRandomSubWeaponElementNotFoundEmbed(error);
            } else if (
                error instanceof RandomSpecialWeaponElementNotFoundError
            ) {
                return buildRandomSpecialWeaponElementNotFoundEmbed(error);
            } else if (error instanceof ElementNotFoundError) {
                return generateItemNotFoundErrorEmbed(randomCommandOptions);
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
