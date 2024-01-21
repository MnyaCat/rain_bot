import { ApplyOptions } from "@sapphire/decorators";
import {
    InteractionHandler,
    InteractionHandlerTypes,
} from "@sapphire/framework";
import { type ButtonInteraction } from "discord.js";
import { rerollButtonIds } from "../constants";
import { RandomCommand } from "../commands/random";
import {
    checkVoiceChannelJoining,
    getExecutedMember,
    getRandomCommandOptions,
} from "../utils/utils";

@ApplyOptions<InteractionHandler.Options>({
    interactionHandlerType: InteractionHandlerTypes.Button,
})
export class ButtonHandler extends InteractionHandler {
    public async run(interaction: ButtonInteraction) {
        const member = await getExecutedMember(interaction);
        checkVoiceChannelJoining(member);
        const options = await getRandomCommandOptions(interaction);
        const replyOptions = await RandomCommand.buildRandomSpecialWeaponResult(
            {
                interaction,
                options,
                timestamp: true,
            }
        );
        await interaction.update(replyOptions);
    }

    public override parse(interaction: ButtonInteraction) {
        if (interaction.customId !== rerollButtonIds.specialWeapon)
            return this.none();
        return this.some();
    }
}
