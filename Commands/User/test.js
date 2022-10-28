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
        if (interaction.member.id == "833747589148442694") {
            interaction.member.roles.add("673722652887613462")
            interaction.reply({
                content: `**Working.**`,
                ephemeral: true
            })
        }

    }
}