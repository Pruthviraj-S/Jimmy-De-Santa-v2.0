// pre-reqs
const { CommandInteraction, MessageEmbed } = require('discord.js')
module.exports = {
    name: 'kill',
    description: 'Kill a member and send em to hell!',
    permission: 'SEND_MESSAGES',
    role: '676057665658421299',
    options: [
        {
            name: 'target',
            description: 'Provide a target to kill',
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
        // variables
        var num = Math.floor(Math.random() * 10);
        var arr = ['https://i.ibb.co/M5hj69M/tenor.gif',
        'https://i.ibb.co/f2S0KRs/tenor.gif',
        'https://i.ibb.co/MG1ktMF/tenor.gif',
        'https://i.ibb.co/j6jV4fm/tenor.gif',
        'https://i.ibb.co/hK6h5qG/tenor.gif',
        'https://i.ibb.co/mF5w9st/tenor.gif',
        'https://i.ibb.co/tXSCcdj/tenor.gif'];
        var randomItem = arr[Math.floor(Math.random() * arr.length)];
        // check if target is bot
        if (options.getMember('target').id == '814223957158002689') {
            interaction.reply('<a:bonk:833336137912942642>')
            return
        }
        // embed
        const embed = new MessageEmbed()
                .setColor('#FF0000')
                .setImage(randomItem)
                .setFooter({
                    text:'May your soul rest in peace.'
                })

        if (num == 9 || 0) {
            embed.setTitle(`${options.getMember('target').displayName} dodged ${interaction.member.displayName}'s attack and killed them instead! 🤦`)
        }
        else {
            embed.setTitle(`${interaction.member.displayName} killed ${options.getMember('target').displayName} ☠️`)
        }
        interaction.reply({
            embeds: [embed],
        })
    }
}