const { dbtoken, guildid } = require('../../config.json');
const { Client, Message } = require('discord.js')
const { mongoose } = require('mongoose')

module.exports = {
    name: 'messageCreate',
    /**
     *  
     * @param {Client} client 
     * @param {Message} message 
     */
    async execute(message, client) {
        // #rhts-crew-submissions react
        if (message.channelId === '889513184686383134') {
            await message.react('<:yes:882852788101607494>');
            message.react('<:no:882852872574869515>');
        }
        else if (message.channelId === '988832045369278464') {
            await message.react('<:yes:882852788101607494>');
            message.react('<:no:882852872574869515>');
        }
    }
}