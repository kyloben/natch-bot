const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('natch')
		.setDescription('gr8 day'),
	async execute(interaction) {
		await interaction.reply('I hope that Nathalie Le is having a gr8 day!');
	},
};