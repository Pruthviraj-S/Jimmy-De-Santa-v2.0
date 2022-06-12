const { CommandInteraction, MessageAttachment } = require('discord.js')
const { createCanvas, loadImage } = require('canvas')

module.exports = {
    name: 'reason',
    description: '💖!!!',
    permission: 'SEND_MESSAGES',
    role: '676057665658421299',
    options: [
        {
            name: 'target',
            description: 'Let em know how much u mean to them 💝💖.',
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
        const canvas = createCanvas(359, 810);
        const ctx = canvas.getContext('2d');
        // load image
        const background = await loadImage('https://i.imgur.com/H8qERpI.png');
        // draw image on canvas
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        // load user image
        const userImg = await loadImage(options.getMember('target').displayAvatarURL({ format: 'jpg' }));
        // draw user image on canvas
        ctx.save();
        ctx.translate(45, 435);
        ctx.rotate(-0.43);
        ctx.drawImage(userImg, 0, 0, 100, 100);
        ctx.restore();
        // prepare attachment
        const attachment = new MessageAttachment(canvas.toBuffer(), 'img.png');
        await interaction.editReply({ files: [attachment] });
    }
}