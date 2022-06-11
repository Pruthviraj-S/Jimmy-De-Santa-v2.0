// pre-reqs
const { CommandInteraction, MessageEmbed } = require('discord.js')
module.exports = {
    name: 'squish',
    description: 'Squishy Squishy?!',
    permission: 'SEND_MESSAGES',
    role: '676057665658421299',
    options: [
        {
            name: 'target',
            description: 'sure u wanna squish this dude?',
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
        var arr = ['https://media.giphy.com/media/l49tEgxrt0AYU/giphy-downsized-large.gif',
                    'https://media.giphy.com/media/37R3fbYQpWQ7m2WOsF/giphy.gif',
                    'https://media.giphy.com/media/j0AsV8zMp1JJQGSbLS/giphy.gif',
                    'https://tenor.com/view/cute-chubby-cheeks-squeeze-mochi-mochi-peach-cat-gif-16897140',
                    'https://media.giphy.com/media/sbPBVwFneoRDW/giphy-downsized-large.gif',
                    'https://media.giphy.com/media/LA6cEtlX6QXxVmdmIU/giphy-downsized-large.gif'];
        var randomItem = arr[Math.floor(Math.random() * arr.length)];
        const embed = new MessageEmbed()
            .setColor('#3EFF00')
            .setTitle(`${options.getMember('target').displayName}, Squishy Squishy?!`)
            .setImage(randomItem)
        interaction.reply({
            embeds: [embed],
        })
    }
}