import {
    Events,
    Listener,
    type ChatInputCommandDeniedPayload,
    type UserError,
} from "@sapphire/framework";
import { errorEmbed } from "../utils/embed_builder";

export class ChatInputCommandDenied extends Listener {
    public constructor(context: Listener.Context, options: Listener.Options) {
        super(context, {
            ...options,
            once: true,
            event: Events.ChatInputCommandDenied,
        });
    }

    public async run(
        error: UserError,
        { interaction }: ChatInputCommandDeniedPayload
    ) {
        const embed = errorEmbed(error.message);
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
