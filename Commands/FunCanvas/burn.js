const {CommandInteraction,MessageEmbed, MessageAttachment, Typing} = require('discord.js')
const {createCanvas,loadImage} = require('canvas')

module.exports = {
    name:'burn',
    description:'Burnnnnn!!!',
    permission:'SEND_MESSAGES',
    role:'676057665658421299',
    options:[
        {
            name:'target',
            description:'wanna burn em?',
            type:'USER',
            required:true,
        },
    ],
    /**
     * 
     * @param {CommandInteraction} interaction  
     * @param {Client} client 
     */
    async execute (interaction){
        const {options} = interaction;
        await interaction.deferReply();
        // create canvas
        const canvas = createCanvas(720,870);
        const ctx = canvas.getContext('2d');
        // load image
        const background = await loadImage('https://i.imgur.com/uja8rrf.jpg'); 
        // draw image on canvas
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        // load user image
        const userImg = await loadImage(options.getMember('target').displayAvatarURL({ format: 'jpg' }));
        // draw user image on canvas
        ctx.drawImage(userImg,58,115,220,220);
        // prepare attachment
        const attachment = new MessageAttachment(canvas.toBuffer(),'img.png');
        await interaction.editReply({files:[attachment]});     
    }
}