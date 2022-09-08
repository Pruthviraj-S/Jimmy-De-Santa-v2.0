const { Client, Message } = require('discord.js')

module.exports = {
    name: 'messageCreate',
    /**
     *  
     * @param {Client} client 
     * @param {Message} message 
     */
    async execute(message, client) {
        // #rhts-crew-submissions,car meet react
        if (message.channelId === '889513184686383134' || message.channel.parentId === '988832045369278464') {
            if (message.attachments.size > 0) {
                await message.react('<:yes:882852788101607494>');
                message.react('<:no:882852872574869515>');
            }
        }
    }
}