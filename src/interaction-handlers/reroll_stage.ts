import { ApplyOptions } from "@sapphire/decorators";
import {
    InteractionHandler,
    InteractionHandlerTypes,
} from "@sapphire/framework";
import type { ButtonInteraction } from "discord.js";
import { rerollButtonIds } from "../constants";
import { RandomCommand, RandomStageOptions } from "../commands/random";
import { checkVoiceChannelJoining, getExecutedMember } from "../utils/utils";

@ApplyOptions<InteractionHandler.Options>({
    interactionHandlerType: InteractionHandlerTypes.Button,
})
export class ButtonHandler extends InteractionHandler {
    public async run(
        interaction: ButtonInteraction,
        parsedData: InteractionHandler.ParseResult<this>
    ) {
        const member = await getExecutedMember(interaction);
        checkVoiceChannelJoining(member);
        const options = parsedData.options;
        const replyOptions = await RandomCommand.buildRandomStageResult({
            seasonId: options.seasonId,
            timestamp: true,
        });
        await interaction.update(replyOptions);
    }

    public override parse(interaction: ButtonInteraction) {
        const customId = interaction.customId;
        if (!customId.startsWith(rerollButtonIds.stage)) return this.none();
        const json = customId.substring(customId.indexOf(";") + 1);
        const options = JSON.parse(json) as RandomStageOptions;
        return this.some({ options: options });
    }
}
