const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const data = new SlashCommandBuilder()
	.setName("git")
	.setDescription("Replies with most common git commands!")
	.setNSFW(false);

async function execute(interaction) {
	const embed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle("Most common git commands")
		.addFields(
			{ name: "\u200B", value: "\u200B" },
			{ name: "$ git init", value: "Initialize git on directory", inline: true },
			{ name: "$ git bla", value: "Bla bla bla bla", inline: true },
			{ name: "\u200B", value: "\u200B" },
			{ name: "$ git bla 2", value: "Bla bla bla bla bla 2", inline: true },
		);

	await interaction.reply({ embeds: [embed] });
}

module.exports = { data, execute };