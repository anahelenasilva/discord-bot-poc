const dotenv = require("dotenv");

const fs = require("node:fs");

const path = require("node:path");

dotenv.config();

const { REST, Routes } = require("discord.js");

const { DISCORD_TOKEN: token, CLLIENT_ID: clientId, GUILD_ID: guildId } = process.env;

const commandsPath = path.join(__dirname, "commands");

const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

const commands = [];

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);

	const command = require(filePath);

	if (!command.data || !command.execute) {
		throw new Error(`Command file ${filePath} does not export a data or execute property.`);
	}

	commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(token);

(async () => {
	try {
		console.log("Started refreshing application (/) commands.");

		await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

		console.log("Successfully reloaded application (/) commands.");
	}
	catch (error) {
		console.error(error);
	}
})();