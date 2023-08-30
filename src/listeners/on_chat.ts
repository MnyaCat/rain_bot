import { ApplyOptions } from "@sapphire/decorators";
import { Listener } from "@sapphire/framework";
import { TextChannel } from "discord.js";

import { mc_emitter, events } from "../mc_listener";
import { MCPlayer } from "../models/mc_models";
import { mcEmbed } from "../utils/embed_builder";

@ApplyOptions<Listener.Options>({})
export class UserEvent extends Listener {
    public constructor(context: Listener.Context, options: Listener.Options) {
        super(context, {
            ...options,
            emitter: mc_emitter,
            event: events.onChat,
        });
    }
    public override run(player: MCPlayer, message: string) {
        const embed = mcEmbed().setTitle(message).setAuthor({
            name: "MnyaCat",
            iconURL:
                "https://pbs.twimg.com/profile_images/1668548953111949312/PuYlFF5Q_400x400.jpg",
        });

        // channel_idが指定されていない場合、channelを取得できなかった場合どうするか
        const channel_id = process.env.LOG_CHANNEL;
        if (!channel_id) {
            return;
        }
        const channel = this.container.client.channels.cache.get(
            channel_id
        ) as TextChannel;
        channel.send({ embeds: [embed] });
    }
}
