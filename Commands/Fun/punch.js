// pre-reqs
const { CommandInteraction, MessageEmbed } = require('discord.js')
module.exports = {
    name: 'punch',
    description: 'Kapoowww!',
    permission: 'SEND_MESSAGES',
    role: '676057665658421299',
    options: [
        {
            name: 'target',
            description: 'soo who u wanna punch?',
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
        var arr = ['https://media.giphy.com/media/GRM7Z2s6AougoR3rvv/giphy.gif',
        'https://media.giphy.com/media/eiw5mph3qBvdiiHxMa/giphy.gif',
        'https://media.giphy.com/media/yo3TC0yeHd53G/giphy.gif',
        'https://media.giphy.com/media/NuiEoMDbstN0J2KAiH/giphy.gif',
        'https://media.giphy.com/media/1Bgr0VaRnx3pCZbaJa/giphy.gif',
        'https://media.giphy.com/media/TyFdAtfZBODNC/giphy.gif',
        'https://media.giphy.com/media/SzC42gUrhHopW/giphy.gif'];
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
                    text:'is dat a blackeye?!.'
                })

        if (num == 9 || 0) {
            embed.setTitle(`${options.getMember('target').displayName} dodged ${interaction.member.displayName}'s attack and punched them instead! 👊`)
        }
        else {
            embed.setTitle(`${interaction.member.displayName} punched ${options.getMember('target').displayName} 👊`)
        }
        interaction.reply({
            embeds: [embed],
        })
    }
}