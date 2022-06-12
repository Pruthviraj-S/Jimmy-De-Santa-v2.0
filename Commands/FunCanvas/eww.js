const { CommandInteraction, MessageEmbed, MessageAttachment, Typing } = require('discord.js')
const { createCanvas, loadImage } = require('canvas')

module.exports = {
    name: 'eww',
    description: 'yuck!!!',
    permission: 'SEND_MESSAGES',
    role: '676057665658421299',
    options: [
        {
            name: 'target',
            description: 'ewwwwwww....',
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
        const canvas = createCanvas(720, 1019);
        const ctx = canvas.getContext('2d');
        // load image
        const background = await loadImage('https://i.imgur.com/lEbZq6j.png');
        // draw image on canvas
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        // load user image
        const userImg = await loadImage(options.getMember('target').displayAvatarURL({ format: 'jpg' }));
        // modify the userimg
        ctx.save();
        ctx.translate(302, 699);
        ctx.rotate(0.65);
        ctx.drawImage(userImg, 0, 0, 90, 90);
        ctx.restore();
        // prepare attachment
        const attachment = new MessageAttachment(canvas.toBuffer(), 'img.png');
        await interaction.editReply({ files: [attachment] });
    }
}