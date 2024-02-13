import { ApplyOptions } from "@sapphire/decorators";
import { Command, container } from "@sapphire/framework";
import {
    buildCustomId,
    buildRerollActionRow,
    generateChoices,
} from "../utils/utils";
import { buildOnlyOneRandomResultEmbed } from "../utils/embedBuilder";
import { randomCategoryName, rerollButtonIds } from "../constants";
import { RandomStageElementNotFoundError } from "../errors";
import { BaseMessageOptions } from "discord.js";

const commandId = process.env.RANDOM_STAGE_COMMAND_ID;
const idHints = commandId != undefined ? [commandId] : undefined;

const seasonOptionName = "season";

@ApplyOptions<Command.Options>({
    name: "random-stage",
})
export class UserCommand extends Command {
    public override async registerApplicationCommands(
        registry: Command.Registry
    ) {
        const prisma = container.database;
        const seasonChoices = generateChoices(await prisma.season.findMany());
        registry.registerChatInputCommand(
            (builder) =>
                builder //
                    .setName(this.name)
                    .setNameLocalization("ja", "ステージを抽選する")
                    .setDescription("Raffles a stage.")
                    .setDescriptionLocalization("ja", "ステージを抽選します。")
                    .addNumberOption((option) =>
                        option
                            .setName(seasonOptionName)
                            .setNameLocalization(
                                "ja",
                                "追加されたシーズンで絞り込む"
                            )
                            .setDescription(
                                "Filters stage by the season in which they were added."
                            )
                            .setDescriptionLocalization(
                                "ja",
                                "ステージを追加されたシーズンで絞り込みます。"
                            )
                            .addChoices(...seasonChoices)
                    ),
            { idHints: idHints }
        );
    }

    public override async chatInputRun(
        interaction: Command.ChatInputCommandInteraction
    ) {
        const seasonId =
            interaction.options.getNumber(seasonOptionName) ?? undefined;

        const replyOptions = await buildRandomStageResult({ seasonId });

        interaction.reply(replyOptions);
    }
}

export async function buildRandomStageResult({
    seasonId,
    timestamp = false,
}: {
    seasonId: number | undefined;
    timestamp?: boolean;
}) {
    const prisma = container.database;
    const stages = await prisma.stage.findMany({
        where: {
            seasonId: seasonId,
        },
    });
    const randomCategory = randomCategoryName.stage;

    if (stages.length < 1) {
        throw new RandomStageElementNotFoundError({
            seasonId: seasonId,
        });
    }

    const embed = buildOnlyOneRandomResultEmbed({
        elements: stages,
        randomCategory: randomCategory,
        timestamp: timestamp,
    });
    const row = buildRerollActionRow(
        buildCustomId(
            rerollButtonIds.stage,
            JSON.stringify({ seasonId } as RandomStageOptions)
        )
    );
    return {
        embeds: [embed],
        components: [row],
    } as BaseMessageOptions;
}

export interface RandomStageOptions {
    seasonId?: number;
}
