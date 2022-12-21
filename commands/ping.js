/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent *//* eslint-disable no-empty-function *//* eslint-disable no-trailing-spaces *//* eslint-disable indent */
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Responde com pong!'),
	run: async ({ interaction, client }) => {

		let ping = Date.now() - interaction.createdTimestamp;
		if (ping < 0)
			ping *= -1;
		
		const embed = new EmbedBuilder()
		.setTitle(`Pong 🏓`)
    	    .setColor(0x0099FF)
    	    .setTimestamp(Date.now())
			.addFields(
				{ name: ' Ping do client', value: `📨 ping: \`${ping}ms\`` },
				{ name: ' Ping da API', value: `📨 API: \`${client.ws.ping}ms\`` });
		await interaction.deferReply();
		interaction.editReply({ 
            embeds: [ embed ],
        });
	},
};