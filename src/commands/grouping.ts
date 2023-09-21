import { ApplyOptions } from "@sapphire/decorators";
import { Command } from "@sapphire/framework";
import { errorEmbed } from "../utils/embed_builder";
import { EmbedBuilder, VoiceBasedChannel } from "discord.js";
import { getVoiceChannel } from "../utils/utils";
import {
    GuildMemberNotFoundError,
    MemberVoiceChannelNotFoundError,
} from "../errors";

const commandId = process.env.GROUPING_COMMAND_ID;
const idHints = commandId != undefined ? [commandId] : undefined;

function grouping(members: string[], groupSize: number) {
    // membersに変更を加えないためにシャローコピー
    const shuffledMembers = [...members];
    // Fisher-Yatesアルゴリズムを使ったシャッフル
    for (let i = shuffledMembers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledMembers[i], shuffledMembers[j]] = [
            shuffledMembers[j],
            shuffledMembers[i],
        ];
    }

    const groups: string[][] = [];
    // iからi+groupSizeまで取り出し、i+groupSizeをiに代入
    // groupSizeが3の場合は0,1を取り出す→2,3,4を取り出す→5,6,7を取り出す
    for (let i = 0; i < shuffledMembers.length; i += groupSize) {
        groups.push(shuffledMembers.slice(i, i + groupSize));
    }

    return groups;
}

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
                    .setDescription(this.description)
                    .addNumberOption((option) =>
                        option
                            .setName("groupsize")
                            .setDescription(
                                "1つのグループに参加できる最大のユーザー数"
                            )
                    )
                    .addStringOption((option) =>
                        option
                            .setName("exclude")
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
        const exclude = interaction.options.getString("exclude") ?? "";

        if (maxGroupSize < 2) {
            const embed = errorEmbed(
                "`groupsize`に入力された数値が範囲外です。2以上の値を入力してください。"
            );
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        const excludeMemberIds = [
            ...exclude.matchAll(/<@!?(?<id>\d{17,20})>/g),
        ].map((value) => value[1]);

        const voiceChannel = await getVoiceChannel(interaction);
        const voiceChannnelMembers = voiceChannel.members.map(
            (member) => member.id
        );
        const includeMemberMentions = [];
        for (let i = 0; i < voiceChannnelMembers.length; i++) {
            const memberId = voiceChannnelMembers[i];
            if (!excludeMemberIds.includes(memberId)) {
                includeMemberMentions.push(`<@${memberId}>`);
            }
        }
        if (includeMemberMentions.length < 1) {
            const embed = errorEmbed(
                "グループ分けの対象メンバーが1人未満です。`exclude`オプションを変更してください。"
            );
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }

        // メンバー数をできる限り揃えるために調整
        const groupSize =
            includeMemberMentions.length /
            Math.ceil(includeMemberMentions.length / maxGroupSize);
        const groups =
            includeMemberMentions.length >= groupSize
                ? grouping(includeMemberMentions, groupSize)
                : [[...includeMemberMentions]];

        const embed = new EmbedBuilder()
            .setTitle("グループ分けの結果")
            .setFooter({ text: `groupsize: ${maxGroupSize}` });
        for (let i = 0; i < groups.length; i++) {
            embed.addFields({
                name: `グループ${i + 1}`,
                value: groups[i].join("\n"),
            });
        }

        return interaction.reply({ embeds: [embed] });
    }
}
