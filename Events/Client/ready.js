const { Client, CommandInteraction } = require('discord.js')
const { DB_TOKEN } = require('./config.json')
const { mongoose } = require('mongoose')

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
                    name: 'with P_Dawg#0304'
                }
            ],
            status: 'idle'
        });
        // log
        console.log(`Bot logged in as ${client.user.username} and ID: ${client.user.id}`)

        // Connect MongoDb
        if (DB_TOKEN) return;
        mongoose.connect(DB_TOKEN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log(`The Bot is connected to MongoDb`)
        }).catch((err) => {
            console.log(err)
        });
    }
}