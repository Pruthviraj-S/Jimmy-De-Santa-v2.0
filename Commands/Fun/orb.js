// pre-reqs
const { CommandInteraction, MessageEmbed } = require('discord.js')
module.exports = {
    name: 'orb',
    description: 'Orabital Strike the F outta em!',
    permission: 'SEND_MESSAGES',
    role: '676057665658421299',
    options: [
        {
            name: 'target',
            description: 'Provide a target to obliterate',
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
        // check if target is bot
        if (options.getMember('target').id == '814223957158002689') {
            interaction.reply('<a:bonk:833336137912942642>')
            return
        }
        // embed
        const embed = new MessageEmbed()
            .setFooter({
                text: 'May your soul rest in peace.'
            })

        if (num == 9 || 0) {
            embed
                .setTitle(`Cliffford hacked into ${options.getMember('target').displayName}'s facility and captured them!`)
                .setColor('#00FFFF')
                .setImage('https://i.ibb.co/r2hQ0mh/CI5fUCe.png')
                .setDescription('I want to be a cat. I want to be a king. I will be king, Avon.')
        }
        else {
            embed
                .setTitle(`${options.getMember('target').displayName} was obliterated by ${interaction.member.displayName}`)
                .setColor('RANDOM')
                .setImage('https://i.ibb.co/L5GNXJ1/XSVmpzj.gif')
        }
        interaction.reply({
            embeds: [embed],
        })
    }
}