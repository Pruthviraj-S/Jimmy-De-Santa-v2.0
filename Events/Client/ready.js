const { guildid, dbtoken } = require('../../config.json');
const { Client, MessageEmbed, CommandInteraction, Guild } = require('discord.js')
const { mongoose, connection } = require('mongoose')

module.exports = {
    name: 'ready',
    once: true,
    /**
    * @param {CommandInteraction} interaction
    * @param {Client} client
    */
    execute(interaction, client) {
        // set prescence
        client.user.setPresence({
            activities: [
                {
                    name: 'with P_dawg#0304'
                }
            ],
            status: 'idle'
        });
        // log
        console.log(`Bot logged in as ${client.user.username} and ID: ${client.user.id}`)

        // Connect MongoDb
        if (!dbtoken) return;
        mongoose.connect(dbtoken, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(()=>{
            console.log(`The Bot is connected to MongoDb`)
        }).catch((err)=>{
            console.log(err)
        });
    }
}