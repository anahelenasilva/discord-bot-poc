const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

const row = new ActionRowBuilder()
	.addComponents(
		new StringSelectMenuBuilder()
			.setCustomId("select")
			.setPlaceholder("Nothing selected")
			.addOptions([
				{ label: "javascript", description: "javascript docs", value: "javascript" },
				{ label: "html", description: "html docs", value: "html" },
				{ label: "react ", description: "react docs", value: "react" },
			]),
	);

const data = new SlashCommandBuilder()
	.setName("docs")
	.setDescription("Replies with some docs")
	.setNSFW(false);

async function execute(interaction) {
	await interaction.reply({ content: "Select one:", components: [row] });
}

module.exports = { data, execute };