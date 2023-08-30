import { ApplyOptions } from "@sapphire/decorators";
import { Command } from "@sapphire/framework";
import { isMessageInstance } from "@sapphire/discord.js-utilities";

const commandId = process.env.PING_COMMAND_ID;
const idHints = commandId != undefined ? [commandId] : undefined;

@ApplyOptions<Command.Options>({
    name: "ping",
    description: "A basic slash command",
})
export class PingCommand extends Command {
    public override registerApplicationCommands(registry: Command.Registry) {
        registry.registerChatInputCommand(
            (builder) =>
                builder.setName(this.name).setDescription(this.description),
            { idHints: idHints }
        );
    }

    public override async chatInputRun(
        interaction: Command.ChatInputCommandInteraction
    ) {
        const msg = await interaction.reply({
            content: `Ping?`,
            ephemeral: true,
            fetchReply: true,
        });

        if (isMessageInstance(msg)) {
            const diff = msg.createdTimestamp - interaction.createdTimestamp;
            const ping = Math.round(this.container.client.ws.ping);
            return interaction.editReply(
                `Pong 🏓! (Round trip took: ${diff}ms. Heartbeat: ${ping}ms.)`
            );
        }

        return interaction.editReply("Failed to retrieve ping :(");
    }
}
