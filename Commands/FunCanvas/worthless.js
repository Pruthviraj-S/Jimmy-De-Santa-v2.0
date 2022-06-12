const { CommandInteraction, MessageEmbed, MessageAttachment, Typing } = require('discord.js')
const { createCanvas, loadImage } = require('canvas')

module.exports = {
    name: 'worthless',
    description: 'excoose me?!!',
    permission: 'SEND_MESSAGES',
    role: '676057665658421299',
    options: [
        {
            name: 'target',
            description: 'sadge.',
            type: 'USER',
            required: true,
        },
    ],
    /**
     * 
     * @param {CommandInteraction} interaction  
     * @param {Client} client 
     */
    async execute(interaction) {
        const { options } = interaction;
        await interaction.deferReply();
        // create canvas
        const canvas = createCanvas(446, 500);
        const ctx = canvas.getContext('2d');
        // load image
        const background = await loadImage('https://i.imgur.com/CljQG9b.jpg');
        // draw image on canvas
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        // load user image
        const userImg = await loadImage(options.getMember('target').displayAvatarURL({ format: 'jpg' }));
        // draw user image on canvas
        ctx.save();
        ctx.translate(169, 67);
        ctx.rotate(0.2);
        ctx.drawImage(userImg, 0, 0, 125, 125);
        ctx.restore();  
        // draw user image on canvas in 2nd slot
        ctx.save();
        ctx.translate(330, 461);
        ctx.rotate(2.8);
        ctx.drawImage(userImg, 0, 0, 25, 25);
        ctx.restore();
        // prepare attachment
        const attachment = new MessageAttachment(canvas.toBuffer(), 'img.png');
        await interaction.editReply({ files: [attachment] });
    }
}