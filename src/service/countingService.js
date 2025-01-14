import path from "node:path";
import { QuickDB } from "quick.db";
import mathEval from "../util/mathEval.js";
import Log from "../util/log.js";
import __ from "./i18n.js";

// ========================= //
// = Copyright (c) NullDev = //
// ========================= //

const userDb = new QuickDB({
    filePath: path.resolve("./data/user_data.sqlite"),
});

const guildDb = new QuickDB({
    filePath: path.resolve("./data/guild_data.sqlite"),
});

/**
 * Handle a potential timeout and return whether the user was timed out
 *
 * @param {import("discord.js").Message} message
 * @return {Promise<Number>}
 */
const handleTimeout = async function(message){
    let timeoutMinutes = Number(await guildDb.get(`guild-${message.guildId}.timeout`));
    if (!timeoutMinutes) return 0;

    const guildUser = await message.guild?.members.fetch(message.author.id);
    if (!guildUser) return 0;

    const lastUserTimeout = await userDb.get(`guild-${message.guildId}.user-${message.author.id}.last-timeout`);
    const lastUserTimeoutTime = await userDb.get(`guild-${message.guildId}.user-${message.author.id}.last-timeout-time`);

    if (!lastUserTimeout){
        await userDb.set(`guild-${message.guildId}.user-${message.author.id}.last-timeout`, timeoutMinutes);
        await userDb.set(`guild-${message.guildId}.user-${message.author.id}.last-timeout-time`, Date.now());
    }

    // if its been a week since the last timeout, reset the timeout factor
    else if (Date.now() - lastUserTimeoutTime > 7 * 24 * 60 * 60 * 1000){
        await userDb.delete(`guild-${message.guildId}.user-${message.author.id}.last-timeout`);
        await userDb.delete(`guild-${message.guildId}.user-${message.author.id}.last-timeout-time`);
    }

    else {
        const timeoutFactor = Number(await guildDb.get(`guild-${message.guildId}.timeout-factor`)) || 1;
        timeoutMinutes = Math.floor(lastUserTimeout * timeoutFactor);
    }

    try {
        await guildUser.timeout(
            timeoutMinutes * 60 * 1000,
            "User lost the counting game",
        );
    }
    catch (e){
        Log.error("Failed to timeout user: ", e);
        return 0;
    }

    return timeoutMinutes;
};

/**
 * Let the user know they failed
 *
 * @param {import("discord.js").Message} message
 * @param {Number} lastNumber
 * @param {Number} result
 * @return {Promise<any>}
 */
const failed = async function(message, lastNumber, result){
    const cheatModeOn = await guildDb.get(`guild-${message.guildId}.cheatmode`);
    const silentModeOn = await guildDb.get(`guild-${message.guildId}.silent-mode`);

    if (!silentModeOn || cheatModeOn) await message.react("❌");

    if (cheatModeOn){
        setTimeout(() => message.delete(), 5000);
        return null;
    }

    let response = await __("replies.incorrect_number", lastNumber, lastNumber + 1, result)(message.guildId);

    const timeout = await handleTimeout(message);
    if (!!timeout) response += "\n" + (await __("replies.timeout", timeout)(message.guildId));

    if (!silentModeOn) await message.reply(`<@${message.author.id}> ${response}`);

    await guildDb.delete(`guild-${message.guildId}.lastUser`);
    await userDb.add(`guild-${message.guildId}.user-${message.author.id}.counting-fails`, 1);
    return await guildDb.set(`guild-${message.guildId}.count`, 0);
};

/**
 * Let the user know they succeeded
 *
 * @param {import("discord.js").Message} message
 * @param {String} guild
 * @param {Number} result
 * @param {String} lastCountString
 * @return {Promise<any>}
 */
const correct = async function(message, guild, result, lastCountString){
    const silentModeOn = await guildDb.get(`guild-${message.guildId}.silent-mode`);

    if (!silentModeOn) await message.react("✅");
    await guildDb.set(`guild-${guild}.count`, result);
    await guildDb.set(`guild-${guild}.lastCountString`, lastCountString);
    await userDb.add(`guild-${message.guildId}.user-${message.author.id}.counting-wins`, 1);
    return await guildDb.set(`guild-${guild}.lastUser`, message.author.id);
};

/**
 * Reply to a message and delete it after a timeout
 *
 * @param {import("discord.js").Message} message
 * @param {String} content
 * @param {Number} [timeout=20000] (8sec)
 * @return {Promise<any>}
 */
const replyWaitAndDelete = async function(message, content, timeout = 8000){
    return await message.reply(content).then((msg) => {
        setTimeout(() => {
            msg.delete();
            message.delete();
        }, timeout);
    });
};

/**
 * Handle counting
 *
 * @param {import("discord.js").Message} message
 * @return {Promise<any>}
 */
const countingService = async function(message){
    const guild = message.guildId;
    if (!guild) return null;

    const channel = message.channel.id;

    const channelID = await guildDb.get(`guild-${guild}.channel`);
    if (!channelID || channelID !== channel) return null;

    const newMemberCooldown = await guildDb.get(`guild-${guild}.new-member-cooldown`) || 0;
    if (newMemberCooldown > 0){
        const memberSince = message.member?.joinedTimestamp;
        if (memberSince){
            const cooldownUntil = memberSince + newMemberCooldown * 60 * 1000;
            if (cooldownUntil > Date.now()){
                const remaining = Math.ceil((cooldownUntil - Date.now()) / (60 * 1000));
                return await replyWaitAndDelete(
                    message,
                    await __("replies.cooldown", remaining)(message.guildId),
                );
            }
        }
    }

    const lastUser = await guildDb.get(`guild-${guild}.lastUser`);
    if (lastUser === message.author.id){
        return await replyWaitAndDelete(
            message,
            await __("errors.same_user")(message.guildId),
        );
    }

    const arithmetic = await guildDb.get(`guild-${guild}.arithmetic`) ?? true;
    const lastNumber = await guildDb.get(`guild-${guild}.count`) || 0;

    if (!arithmetic){
        if (isNaN(Number(message.content))){
            return await replyWaitAndDelete(
                message,
                await __("errors.not_a_number")(message.guildId),
            );
        }

        if (lastNumber + 1 !== Number(message.content)){
            return await failed(message, lastNumber, Number(message.content));
        }

        return await correct(message, guild, Number(message.content), message.content);
    }

    const result = Math.round(mathEval(message.content ?? 0) || 0); // we deal with integers only anyway

    if (!result || isNaN(result)){
        return await replyWaitAndDelete(
            message,
            await __("errors.invalid_arithmetic")(message.guildId),
        );
    }

    if (Number(lastNumber) + 1 !== Number(result)){
        return await failed(message, lastNumber, result);
    }

    if (Number(lastNumber) + 1 !== Number(message.content)){
        await userDb.add(`guild-${message.guildId}.user-${message.author.id}.counting-math`, 1);
    }

    return await correct(message, guild, result, message.content);
};

export default countingService;
