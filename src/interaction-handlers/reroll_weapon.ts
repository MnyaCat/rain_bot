import { ApplyOptions } from "@sapphire/decorators";
import {
    InteractionHandler,
    InteractionHandlerTypes,
} from "@sapphire/framework";
import type { ButtonInteraction } from "discord.js";
import { rerollButtonIds } from "../constants";
import { RandomCommandOptions, UserCommand } from "../commands/random";
import { getRandomCommandOptions } from "../utils/utils";
import { CommandOptionFetchFailedError } from "../errors";

@ApplyOptions<InteractionHandler.Options>({
    interactionHandlerType: InteractionHandlerTypes.Button,
})
export class ButtonHandler extends InteractionHandler {
    public async run(interaction: ButtonInteraction) {
        let options: RandomCommandOptions;
        try {
            options = await getRandomCommandOptions(interaction);
        } catch (error) {
            if (error instanceof CommandOptionFetchFailedError) {
                return;
            } else {
                throw error;
            }
        }
        const replyOptions = await UserCommand.buildRandomWeaponResult({
            interaction,
            options,
            timestamp: true,
        });
        await interaction.update(replyOptions);
    }

    public override parse(interaction: ButtonInteraction) {
        if (interaction.customId !== rerollButtonIds.weapon) return this.none();
        return this.some();
    }
}
