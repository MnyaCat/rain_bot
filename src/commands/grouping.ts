import { ApplyOptions } from "@sapphire/decorators";
import { Command, container } from "@sapphire/framework";
import { buildErrorEmbed } from "../utils/embed_builder";
import { EmbedBuilder } from "discord.js";
import { getVoiceChannel, shuffleArray } from "../utils/utils";

const commandId = process.env.GROUPING_COMMAND_ID;
const idHints = commandId != undefined ? [commandId] : undefined;

@ApplyOptions<Command.Options>({
    name: "grouping",
    description:
        "ボイスチャンネルのメンバーを、いくつかのグループにランダムに割り当てます。ボイスチャンネルに参加している時のみ実行できます。",
    preconditions: ["InVoiceChannel"],
})
export class GroupingCommand extends Command {
    public override registerApplicationCommands(registry: Command.Registry) {
        registry.registerChatInputCommand(
            (builder) =>
                builder
                    .setName(this.name)
                    .setNameLocalization("ja", "グルーピング")
                    .setDescription(this.description)
                    .addNumberOption((option) =>
                        option
                            .setName("groupsize")
                            .setNameLocalization("ja", "グループサイズ")
                            .setDescription(
                                "1つのグループに参加できる最大のユーザー数"
                            )
                    )
                    .addStringOption((option) =>
                        option
                            .setName("additional-member")
                            .setNameLocalization("ja", "追加するメンバー")
                            .setDescription(
                                "グループ分けの対象に追加するメンバー。メンションで指定してください。"
                            )
                    )
                    .addStringOption((option) =>
                        option
                            .setName("exclude-member")
                            .setNameLocalization("ja", "除外するメンバー")
                            .setDescription(
                                "グループ分けの対象に含めないメンバー。メンションで指定してください。"
                            )
                    ),
            { idHints: idHints }
        );
    }

    public override async chatInputRun(
        interaction: Command.ChatInputCommandInteraction
    ) {
        const maxGroupSize = interaction.options.getNumber("groupsize") ?? 4;
        const additional =
            interaction.options.getString("additional-member") ?? "";
        const exclude = interaction.options.getString("exclude-member") ?? "";

        const lastGroupingResults = container.lastGroupingResult;

        if (maxGroupSize < 2) {
            const embed = buildErrorEmbed(
                "`groupsize`に入力された数値が範囲外です。2以上の値を入力してください。"
            );
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        const additionalMemberIds = [
            ...additional.matchAll(/<@!?(?<id>\d{17,20})>/g),
        ].map((value) => value[1]);
        const excludeMemberIds = [
            ...exclude.matchAll(/<@!?(?<id>\d{17,20})>/g),
        ].map((value) => value[1]);

        const voiceChannel = await getVoiceChannel(interaction);
        const voiceChannnelMemberIds = voiceChannel.members.map(
            (member) => member.id
        );
        const targetMemberIds = voiceChannnelMemberIds
            .concat(additionalMemberIds)
            .filter(
                (targetMemberId) =>
                    !excludeMemberIds.some(
                        (excludeMemberId) => excludeMemberId === targetMemberId
                    )
            );

        if (targetMemberIds.length < 1) {
            const embed = buildErrorEmbed(
                "グループ分けの対象メンバーが1人未満です。`exclude`オプションを変更してください。"
            );
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        // メンバー数をできる限り均等にするために調整
        const groupSize =
            targetMemberIds.length /
            Math.ceil(targetMemberIds.length / maxGroupSize);

        let loopLimitReached = false;

        const groups = (() => {
            if (targetMemberIds.length > groupSize) {
                let groups = this.grouping(targetMemberIds, groupSize);
                if (lastGroupingResults != undefined) {
                    const loopLimit = 10;
                    let count = 0;
                    while (
                        this.groupingResultEqual(lastGroupingResults, groups) &&
                        count < loopLimit
                    ) {
                        groups = this.grouping(targetMemberIds, groupSize);
                        count += 1;
                    }

                    if (count >= loopLimit) {
                        loopLimitReached = true;
                    }
                }
                return groups;
            } else {
                return [[...targetMemberIds]];
            }
        })();

        const embed = new EmbedBuilder().setTitle("グループ分けの結果");
        for (let i = 0; i < groups.length; i++) {
            const memberMentions = groups[i].map(
                (memberId) => `<@${memberId}>`
            );
            embed.addFields({
                name: `グループ${i + 1}`,
                value: memberMentions.join("\n"),
            });
        }

        if (loopLimitReached) {
            embed.setDescription(
                "注意: 最大ループ回数に達したため、前回と同じグループ分けの結果となりました。"
            );
        }

        container.lastGroupingResult = groups;

        return interaction.reply({ embeds: [embed] });
    }

    private grouping(memberIds: string[], groupSize: number) {
        const shuffledMembers = shuffleArray(memberIds);
        const groups: string[][] = [];

        // iからi+groupSizeまで取り出し、i+groupSizeをiに代入
        // groupSizeが3の場合は0,1を取り出す→2,3,4を取り出す→5,6,7を取り出す
        for (let i = 0; i < shuffledMembers.length; i += groupSize) {
            groups.push(shuffledMembers.slice(i, i + groupSize));
        }
        return groups;
    }

    private groupingResultEqual(result1: string[][], result2: string[][]) {
        return (
            JSON.stringify([...result1].map((item) => item.sort()).sort()) ===
            JSON.stringify([...result2].map((item) => item.sort()).sort())
        );
    }
}

export interface GroupingOptions {
    groupSize: number;
}
