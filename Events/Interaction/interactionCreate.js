// get pre-reqs
const {Client, CommandInteraction, MessageEmbed} = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    /**
     * @param {CommandInteraction} Interaction
     * @param {Client} client
     */
    async execute(Interaction,client){
        if(Interaction.isCommand()){
            const command = client.commands.get(Interaction.commandName);
            if(!command){
                // embed error handle
                return Interaction.reply({embeds:
                [
                    new MessageEmbed()
                    .setColor('REd')
                    .setDescription('⚠️ An error oocurred while running this command.')
                ]}) && client.commands.delete(Interaction.commandName);
            }
            // permission check
            if (command.permission && !Interaction.member.permissions.has(command.permission)) {
                return Interaction.reply({ content: `You do not have the required permission for this command: \`${Interaction.commandName}\`.`, ephemeral: true })
            }
            // execute
            command.execute(Interaction,client)
        }
    }
}