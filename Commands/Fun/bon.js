// pre-reqs
const { CommandInteraction, MessageEmbed } = require('discord.js')
module.exports = {
    name: 'bon',
    description: 'BON allllllll!',
    permission: 'SEND_MESSAGES',
    role: '676057665658421299',
    options: [
        {
            name: 'target',
            description: 'soo who u wanna bon?',
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
        var arr = ['https://media.giphy.com/media/qPD4yGsrc0pdm/giphy.gif'];
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
                    text:'get bonned nuub 😒.'
                })

        if (num == 9 || 0) {
            embed.setTitle(`${options.getMember('target').displayName} dodged ${interaction.member.displayName}'s attack and bonned them instead! 😶‍🌫️`)
        }
        else {
            embed.setTitle(`${interaction.member.displayName} bonnned ${options.getMember('target').displayName} 😶‍🌫️`)
        }
        interaction.reply({
            embeds: [embed],
        })
    }
}