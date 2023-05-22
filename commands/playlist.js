const { SlashCommandBuilder } = require("discord.js");

const data = new SlashCommandBuilder()
	.setName("playlist")
	.setDescription("Replies with a spotify playlist.")
	.setNSFW(false);

async function execute(interaction) {
	await interaction.reply("https://open.spotify.com/playlist/71d99pLh0TpbdIJESHAsDN?si=a416066bef084eed");
}

module.exports = { data, execute };