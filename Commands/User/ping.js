// pre-reqs
const {CommandInteraction, Client} =  require('discord.js')
module.exports = {
    name: 'ping',
    description: 'Bot Ping',
    permission: '',
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction,client){
        interaction.reply({
            content: `**${client.ws.ping}ms**`,
            ephemeral:true
        })
    }
}