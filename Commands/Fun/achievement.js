// pre-reqs
const { CommandInteraction} = require('discord.js')
const superagent = require('superagent')
module.exports = {
    name: 'achievement',
    description: 'Get Achievement.',
    permission: 'SEND_MESSAGES',
    role: '676057665658421299',
    options:[
        {
            name:'text',
            description:'Enter text.',
            type:'STRING',
            required:true
        },
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction) {
        const {options} = interaction
        const text = options.getString('text');
        // string length limit
        if(text.length<1 || text.length>25){
            interaction.reply('Enter a valid text. Must be between 1-25 characters');
            return;
        };
        // send query and fetch the img
        const{body} = await superagent
            .get('https://www.minecraftskinstealer.com/achievement/a.php')
            .query({
                i:1,
                h:'Achievement Get!',
                t:text
            });
        // send 
        interaction.reply({files:[body]});
    }
}