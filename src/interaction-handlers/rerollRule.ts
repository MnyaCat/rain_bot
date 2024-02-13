import { ApplyOptions } from "@sapphire/decorators";
import {
    InteractionHandler,
    InteractionHandlerTypes,
} from "@sapphire/framework";
import type { ButtonInteraction } from "discord.js";
import { rerollButtonIds } from "../constants";
import { checkCustomId } from "../utils/utils";
import { buildRandomRuleResult } from "../commands/randomRule";

@ApplyOptions<InteractionHandler.Options>({
    interactionHandlerType: InteractionHandlerTypes.Button,
})
export class ButtonHandler extends InteractionHandler {
    public async run(interaction: ButtonInteraction) {
        // ボイスチャンネルのメンバーを参照しないのでボイスチャンネルにいるかのチェックはしない
        const replyOptions = await buildRandomRuleResult({
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
