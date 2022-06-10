// import perms validation
const { Perms } = require('../validation/Permissions');
// import pre-reqs
const {Client} =  require('discord.js');
const {guildid} = require('../config.json');


// enables suggestions for methods
/**
 * 
 * @param {Client} client 
 */

module.exports = async (client,PG,Ascii) => {
    // Create table
    const Table = new Ascii('Commands loaded!!');
    // initialize array for storing commands
    CommandsArray = [];
    // Insert data into table
    (await PG(`${process.cwd().replace(/\\/g,"/")}/Commands/**/*.js`)).map(async (file) => {
        const command = require(file);
        // check name
        if(!command.name){
            return Table.addRow(file.split('/')[8],'⚠️ Failed','Missing name.')
        }
        // check description
        if(!command.context && !command.description){
            return Table.addRow(command.name,'⚠️ Failed','Missing description.')
        }
        // check perms
        if(command.permission){
            if(Perms.includes(command.permission)){
                command.defaultPermission=false;
            }else{
                return Table.addRow(command.name,'⚠️ Failed','Missing perms or invalid.')
            }
        }
        // push commands into commands array
        client.commands.set(command.name,command);
        CommandsArray.push(command);

        await Table.addRow(command.name,'✅ Succesfull.');
    })

    console.log(Table.toString());

    //  update commands
    client.on('ready',async () => {
        
        const Currentguild = client.guilds.cache.get(guildid);
        Currentguild.commands.set(CommandsArray);

    });
}