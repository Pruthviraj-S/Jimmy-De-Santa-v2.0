// pre-reqs
const { CommandInteraction, MessageEmbed } = require('discord.js')
module.exports = {
    name: 'hug',
    description: 'Hug a user and make their day!',
    permission: 'SEND_MESSAGES',
    role: '676057665658421299',
    options: [
        {
            name: 'target',
            description: 'Provide a target to hug',
            type: 'USER',
            required: true,
        },
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction) {
        const { options } = interaction
        var arr = ['https://media.giphy.com/media/QbkL9WuorOlgI/giphy.gif',
            'https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif',
            'https://media.giphy.com/media/8tpiC1JAYVMFq/giphy.gif',
            'https://media.giphy.com/media/16bJmyPvRbCDu/giphy.gif',
            'https://media.giphy.com/media/0OgdJVNjbcIifqSb7U/giphy.gif',
            'https://media.giphy.com/media/Hld9vKjLk3irC/giphy.gif',
            'https://media.giphy.com/media/f9EmXxglhdhAj1bo28/giphy.gif',
            'https://media.giphy.com/media/vFCLfTAIRj729v7oe0/giphy.gif',
            'https://media.giphy.com/media/1JmGiBtqTuehfYxuy9/giphy.gif'];
        var randomItem = arr[Math.floor(Math.random() * arr.length)];
        const embed = new MessageEmbed()
            .setColor('#3EFF00')
            .setTitle(`${interaction.member.displayName} hugs ${options.getMember('target').displayName} !`)
            .setImage(randomItem)
        interaction.reply({
            embeds: [embed],
        })
    }
}