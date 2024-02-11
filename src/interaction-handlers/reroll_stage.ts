import { ApplyOptions } from "@sapphire/decorators";
import {
    InteractionHandler,
    InteractionHandlerTypes,
} from "@sapphire/framework";
import type { ButtonInteraction } from "discord.js";
import { rerollButtonIds } from "../constants";
import { checkCustomId } from "../utils/utils";
import {
    RandomStageOptions,
    buildRandomStageResult,
} from "../commands/RandomStage";

@ApplyOptions<InteractionHandler.Options>({
    interactionHandlerType: InteractionHandlerTypes.Button,
})
export class ButtonHandler extends InteractionHandler {
    public async run(
        interaction: ButtonInteraction,
        parsedData: InteractionHandler.ParseResult<this>
    ) {
        // ボイスチャンネルのメンバーを参照しないのでボイスチャンネルにいるかのチェックはしない
        const options = parsedData.options;
        const replyOptions = await buildRandomStageResult({
            seasonId: options.seasonId,
            timestamp: true,
        });
        await interaction.update(replyOptions);
    }

    public override parse(interaction: ButtonInteraction) {
        const customId = interaction.customId;
        if (!checkCustomId(customId, rerollButtonIds.stage)) return this.none();
        const json = customId.substring(customId.indexOf(";") + 1);
        const options = JSON.parse(json) as RandomStageOptions;
        return this.some({ options: options });
    }
}
