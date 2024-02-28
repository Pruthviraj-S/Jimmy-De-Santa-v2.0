// pre-reqs
const { CommandInteraction, Client } = require('discord.js')
module.exports = {
    name: 'test',
    description: 'Bot Ping',
    permission: 'SEND_MESSAGES',
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction, client) {

            interaction.reply({
                content: `**Working.**`,
                ephemeral: true
            })

    }
}