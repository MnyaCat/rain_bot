import {
    Events,
    Listener,
    type ChatInputCommandDeniedPayload,
    type UserError,
} from "@sapphire/framework";
import { buildErrorEmbed } from "../utils/embed_builder";

export class ChatInputCommandDeniedListener extends Listener {
    public constructor(context: Listener.Context, options: Listener.Options) {
        super(context, {
            ...options,
            event: Events.ChatInputCommandDenied,
        });
    }

    public async run(
        error: UserError,
        { interaction }: ChatInputCommandDeniedPayload
    ) {
        const embed = buildErrorEmbed(error.message);
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
