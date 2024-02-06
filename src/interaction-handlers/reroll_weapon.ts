import { ApplyOptions } from "@sapphire/decorators";
import {
    InteractionHandler,
    InteractionHandlerTypes,
} from "@sapphire/framework";
import type { ButtonInteraction } from "discord.js";
import { rerollButtonIds } from "../constants";
import { RandomWeaponOptions } from "../commands/randomWeapons";
import { getExecutedMember, isVoiceChannelJoinig } from "../utils/utils";
import { buildRandomWeaponResult } from "../commands/randomWeapons";
import { MemberVoiceChannelNotJoining } from "../errors";

@ApplyOptions<InteractionHandler.Options>({
    interactionHandlerType: InteractionHandlerTypes.Button,
})
export class ButtonHandler extends InteractionHandler {
    public async run(
        interaction: ButtonInteraction,
        parsedData: InteractionHandler.ParseResult<this>
    ) {
        const options = parsedData.options;
        const executedMember = await getExecutedMember(interaction);
        const voiceChannelJoining = isVoiceChannelJoinig(executedMember);
        // ボイスチャンネルに参加していない状態でonlyOneがfalseの再ロールボタンを押した場合に例外をスローする
        if (!options.onlyOne && !voiceChannelJoining) {
            throw new MemberVoiceChannelNotJoining(
                "**[1つのみ抽選する]**が有効になっていないため、ボイスチャンネルに参加していない状態では再ロールできません。"
            );
        }
        const replyOptions = await buildRandomWeaponResult({
            interaction: interaction,
            subWeaponId: options.subWeaponId,
            specialWeaponId: options.specialWeaponId,
            seasonId: options.seasonId,
            weaponClassId: options.weaponClassId,
            onlyOne: options.onlyOne,
            timestamp: true,
        });
        await interaction.update(replyOptions);
    }

    public override parse(interaction: ButtonInteraction) {
        const customId = interaction.customId;
        if (
            customId.substring(0, customId.indexOf(";")) !==
            rerollButtonIds.weapon
        )
            return this.none();
        const json = customId.substring(customId.indexOf(";") + 1);
        const options = JSON.parse(json) as RandomWeaponOptions;
        return this.some({ options: options });
    }
}
