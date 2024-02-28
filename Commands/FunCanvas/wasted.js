const { CommandInteraction, MessageAttachment } = require('discord.js')
const { createCanvas, loadImage } = require('@napi-rs/canvas')

module.exports = {
    name: 'wasted',
    description: 'R.I.P!!! ☠️',
    permission: 'SEND_MESSAGES',
    role: '676057665658421299',
    options: [
        {
            name: 'target',
            description: 'Get wasted.',
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
        const canvas = createCanvas(250, 250);
        const ctx = canvas.getContext('2d');
        // load user image
        const background = await loadImage(options.getMember('target').displayAvatarURL({ format: 'jpg' }));
        // draw user image on canvas
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        // greyscale
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < data.data.length; i += 4) {
            const brightness = (0.34 * data.data[i]) + (0.5 * data.data[i + 1]) + (0.16 * data.data[i + 2]);
            data.data[i] = brightness;
            data.data[i + 1] = brightness;
            data.data[i + 2] = brightness;
        }
        ctx.putImageData(data, 0, 0);
        // load image
        const wasted = await loadImage('https://i.imgur.com/fSuByor.png');
        // draw image on canvas
        ctx.drawImage(wasted, 0, 0, canvas.width, canvas.height);
        // prepare attachment
        const attachment = new MessageAttachment(canvas.toBuffer('image/png'), 'img.png');
        await interaction.editReply({ files: [attachment] });
    }
}