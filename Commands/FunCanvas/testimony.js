const { CommandInteraction, MessageAttachment } = require('discord.js')
const { createCanvas, loadImage } = require('@napi-rs/canvas')

module.exports = {
    name: 'testimony',
    description: 'Weeb Alert!!!',
    permission: 'SEND_MESSAGES',
    role: '676057665658421299',
    options: [
        {
            name: 'target',
            description: 'Know a weeb?.',
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
        const canvas = createCanvas(806, 526);
        const ctx = canvas.getContext('2d');
        // load image
        const background = await loadImage('https://i.imgur.com/Yf2S0E6.png');
        // draw image on canvas
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        // load user image
        const userImg = await loadImage(options.getMember('target').displayAvatarURL({ format: 'jpg' }));
        // draw user image on canvas
        ctx.save();
        ctx.translate(407, 181);
        ctx.rotate(0.23);
        ctx.drawImage(userImg, 0, 0, 140, 140);
        ctx.restore();
        // prepare attachment
        const attachment = new MessageAttachment(canvas.toBuffer('image/png'), 'img.png');
        await interaction.editReply({ files: [attachment] });
    }
}