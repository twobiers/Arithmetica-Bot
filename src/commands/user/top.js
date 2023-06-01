import path from "node:path";
import { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } from "discord.js";
import { QuickDB } from "quick.db";
import generateImage from "../../service/topImageGenerator.js";
import translations from "../../../locales/commands/translations.js";
import __ from "../../service/i18n.js";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

const db = new QuickDB({
    filePath: path.resolve("./data/user_data.sqlite"),
});

export default {
    data: new SlashCommandBuilder()
        .setName("top")
        .setDescription(translations.top.desc)
        .setDescriptionLocalizations(translations.top.translations)
        .setDMPermission(false)
        .addStringOption((option) =>
            option.setName("sort")
                .setDescription(translations.top.options.sort.desc)
                .setDescriptionLocalizations(translations.top.options.sort.translations)
                .setRequired(false)
                .addChoices({
                    name: translations.top.options.sort.choices.wins.desc,
                    name_localizations: translations.top.options.sort.choices.wins.translations,
                    value: "wins",
                }, {
                    name: translations.top.options.sort.choices.fails.desc,
                    name_localizations: translations.top.options.sort.choices.fails.translations,
                    value: "fails",
                })),
    /**
     * @param {import("discord.js").CommandInteraction} interaction
     */
    async execute(interaction){
        const guildkey = `guild-${interaction.guildId}`;
        const users = await db.get(guildkey);

        if (!users) return await interaction.reply(await __("errors.no_top_stats")(interaction.guildId));

        const sortBy = interaction.options.get("sort")?.value || "wins";
        const top10 = Object.entries(users)
            .sort((a, b) => (b[1][`counting-${sortBy}`] || 0) - (a[1][`counting-${sortBy}`] || 0))
            .slice(0, 10)
            .map((user, index) => ([
                index + 1,
                user[0].split("-")[1],
                user[1]["counting-wins"] || 0,
                user[1]["counting-fails"] || 0,
            ]));

        if (!top10.length) return await interaction.reply(await __("errors.no_top_stats")(interaction.guildId));

        const top10WithNames = await Promise.all(top10.map(async(user) => {
            const [index, userid, wins, fails] = user;

            const member = await interaction.guild?.members.fetch(userid).catch(() => null);
            if (!member) return [index, { tag: "Anonymous", pic: null }, wins, fails];

            return [index, { tag: member.user.tag, pic: member.displayAvatarURL({
                extension: "png",
            }) }, wins, fails];
        }));

        const buffer = await generateImage(top10WithNames);

        const topImage = new AttachmentBuilder(buffer)
            .setName("top.png");

        const embed = new EmbedBuilder()
            .setColor("Random")
            .setTitle(await __("replies.top_users.title", interaction.guild?.name)(interaction.guildId))
            .setDescription(
                await __(
                    "replies.top_users.description",
                    await __(`replies.top_users.${sortBy}`)(interaction.guildId),
                )(interaction.guildId),
            ).setImage("attachment://top.png");

        const messageOptions = {
            files: [topImage],
            embeds: [embed],
        };

        return await interaction.reply(messageOptions);
    },
};
