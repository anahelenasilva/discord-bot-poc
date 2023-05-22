const dotenv = require("dotenv");

const fs = require("node:fs");

const path = require("node:path");

dotenv.config();

const { DISCORD_TOKEN: token } = process.env;
// , CLLIENT_ID: clientId, GUILD_ID: guildId
const { Client, Events, GatewayIntentBits } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Map();

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);

const commandsPath = path.join(__dirname, "commands");

const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);

	const command = require(filePath);

	if (!command.data || !command.execute) {
		throw new Error(`Command file ${filePath} does not export a data or execute property.`);
	}

	client.commands.set(command.data.name, command);
}

client.on(Events.InteractionCreate, async interaction => {
	if (interaction.isStringSelectMenu()) {
		const value = interaction.values[0];

		if (value === "javascript") {
			await interaction.reply("Checkout javascript docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript");
		}
		else {
			await interaction.reply("Other doc");
		}
		return;
	}

	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`Command ${interaction.commandName} not found.`);

		return;
	}

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);

		await interaction.reply({ content: "There was an error while executing this command!", ephemeral: true });
	}
});