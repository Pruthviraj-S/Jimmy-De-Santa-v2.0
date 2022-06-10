// Documentation: https://discord.js.org/#/docs/discord.js/main/general/welcome

// Require the necessary discord.js classes
const { Client, Intents, Collection } = require('discord.js');

//  Import data from config.json
const { prefix, token , guildid, clientid } = require('./config.json');

// Create a new client instance, https://discord.js.org/#/docs/main/stable/class/Intents
const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS, 
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ] 
});

// use promisify to convert callback into promise using utils, add table, glob
const {promisify} = require('util');
const { glob } = require('glob');
const PG = promisify(glob);
const Ascii = require('ascii-table');

// create collections
client.commands = new Collection();

["EventHandler","CommandHandler"].forEach(handler => {
    require(`./Handlers/${handler}`)(client,PG,Ascii);
});
// Login to Discord with your client's token
client.login(token);