import { ApplyOptions } from "@sapphire/decorators";
import {
    InteractionHandler,
    InteractionHandlerTypes,
} from "@sapphire/framework";
import type { ButtonInteraction } from "discord.js";
import { rerollButtonIds } from "../constants";
import { RandomCommand } from "../commands/random";
import {
    checkCustomId,
    checkVoiceChannelJoining,
    getExecutedMember,
} from "../utils/utils";

@ApplyOptions<InteractionHandler.Options>({
    interactionHandlerType: InteractionHandlerTypes.Button,
})
export class ButtonHandler extends InteractionHandler {
    public async run(interaction: ButtonInteraction) {
        const member = await getExecutedMember(interaction);
        checkVoiceChannelJoining(member);
        const replyOptions = await RandomCommand.buildRandomRuleResult({
            timestamp: true,
        });
        await interaction.update(replyOptions);
    }

    public override parse(interaction: ButtonInteraction) {
        if (!checkCustomId(interaction.customId, rerollButtonIds.rule))
            return this.none();
        return this.some();
    }
}
