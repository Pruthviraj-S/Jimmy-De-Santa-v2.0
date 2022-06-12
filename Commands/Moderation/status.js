// pre-req
const {Client,CommandInteraction,MessageEmbed} = require('discord.js');
const {connection} = require('mongoose');
require('../../Events/Client/ready');

module.exports = {
    name: 'status',
    description: 'Shows Bot Status',
    permission: 'BAN_MEMBERS',
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction,client){
        // Embed make
        const statusemb = new MessageEmbed()
        .setColor('DARK_AQUA')
        .setDescription(`**Status:** ✅ Online \n **Ping:** ${client.ws.ping}ms \n **Uptime:** <t:${parseInt(client.readyTimestamp/1000)}:R> \n **Database:** ${switch_status(connection.readyState)}`)
        // send embed
        interaction.reply({embeds:[statusemb]})
    }
}

// switch status function
function switch_status(valset){
    var set_status = '';
    switch(valset){
        case 0 : set_status = `❌ **Disconnected.**`
        break;
        case 1 : set_status = `✅ **Connected.**`
        break;
        case 2 : set_status = `🟧 **Connecting.**`
        break;
        case 3 : set_status = `🟥 **Disconnecting.**`
        break;
    }
    return set_status;
}