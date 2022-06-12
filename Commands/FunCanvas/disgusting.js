const {CommandInteraction,MessageEmbed, MessageAttachment, Typing} = require('discord.js')
const {createCanvas,loadImage} = require('canvas')

module.exports = {
    name:'disgusting',
    description:'disgusting!!!',
    permission:'SEND_MESSAGES',
    role:'676057665658421299',
    options:[
        {
            name:'target',
            description:'find someone disgusting?',
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
        const canvas = createCanvas(778,892);
        const ctx = canvas.getContext('2d');
        // load image
        const background = await loadImage('https://i.imgur.com/TMOcThf.png'); 
        // draw image on canvas
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        // load user image
        const userImg = await loadImage(options.getMember('target').displayAvatarURL({ format: 'jpg' }));
        // draw user image on canvas
        ctx.drawImage(userImg,185, 26, 310, 310);
        // prepare attachment
        const attachment = new MessageAttachment(canvas.toBuffer(),'img.png');
        await interaction.editReply({files:[attachment]});     
    }
}