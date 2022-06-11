// pre-reqs
const {CommandInteraction,MessageEmbed} =  require('discord.js')
module.exports = {
    name: 'blow',
    description: 'Blow a user to oblivion',
    permission: 'SEND_MESSAGES',
    role:'676057665658421299',
    options: [
    	{
          	name: 'target',
        	description: 'Provide a target to blow.',
        	type: 'USER',
            required: true,
        }, 
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    execute(interaction){
        const {options} = interaction
        var arr = ['https://media.giphy.com/media/g0pi92v4tywky3xrWC/giphy.gif',
                    'https://media.giphy.com/media/3rXs5J0hZkXwTZjuvM/giphy.gif',
                    'https://media.giphy.com/media/oe33xf3B50fsc/giphy.gif',
                    'https://media.giphy.com/media/urp8cVywl1Sk8/giphy.gif',
                    'https://media.giphy.com/media/FnatKdwxRxpVC/giphy.gif',
                    'https://media.giphy.com/media/146BUR1IHbM6zu/giphy.gif',
                    'https://media.giphy.com/media/26n6XC8EYdrzRniWQ/giphy.gif',
                    'https://media.giphy.com/media/PkoiA8DgkPoNu21o1I/giphy.gif',
                    'https://media.giphy.com/media/3oEjHKPPlmQlGXfeLK/giphy.gif'];
                var randomItem = arr[Math.floor(Math.random() * arr.length)];
                const embed = new MessageEmbed()
                    .setColor('#3EFF00')
                    .setTitle(`${interaction.member.displayName} blew ${options.getMember('target').displayName} !`)
                    .setImage(randomItem)
        interaction.reply({
            embeds:[embed]
        })
    }
}