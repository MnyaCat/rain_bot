import { ApplyOptions } from "@sapphire/decorators";
import { Command, container } from "@sapphire/framework";
import { BaseMessageOptions } from "discord.js";
import { randomCategoryName, rerollButtonIds } from "../constants";
import { buildRerollActionRow, buildCustomId } from "../utils/utils";
import { buildOnlyOneRandomResultEmbed } from "../utils/embedBuilder";

const commandId = process.env.RANDOM_RULE_COMMAND_ID;
const idHints = commandId != undefined ? [commandId] : undefined;

@ApplyOptions<Command.Options>({
    name: "random-rule",
})
export class UserCommand extends Command {
    public override registerApplicationCommands(registry: Command.Registry) {
        registry.registerChatInputCommand(
            (builder) =>
                builder //
                    .setName(this.name)
                    .setNameLocalization("ja", "ルールを抽選する")
                    .setDescription("Raffles a rule.")
                    .setDescriptionLocalization("ja", "ルールを抽選します。"),
            { idHints: idHints }
        );
    }

    public override async chatInputRun(
        interaction: Command.ChatInputCommandInteraction
    ) {
        const replyOptions = await buildRandomRuleResult({});

        interaction.reply(replyOptions);
    }
}

export async function buildRandomRuleResult({
    timestamp = false,
}: {
    timestamp?: boolean;
}) {
    const prisma = container.database;
    const rules = await prisma.rule.findMany();
    const randomCategory = randomCategoryName.rule;

    const embed = buildOnlyOneRandomResultEmbed({
        elements: rules,
        randomCategory: randomCategory,
        timestamp: timestamp,
    });
    const row = buildRerollActionRow(buildCustomId(rerollButtonIds.rule));
    return {
        embeds: [embed],
        components: [row],
    } as BaseMessageOptions;
}
