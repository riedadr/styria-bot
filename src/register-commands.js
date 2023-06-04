import { REST, Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

const commands = [
	{
		name: "hey",
		description: "greetings",
	},
	{
		name: "ping",
		description: "sends ping",
	},
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

const start = async () => {
	try {
		console.log("registering commands ...");
		await rest.put(
			Routes.applicationGuildCommands(
				process.env.CLIENT_ID,
				process.env.GUILD_ID
			),
			{ body: commands }
		);
		console.log("commands registered!");
	} catch (error) {
		console.error("error", error);
	}
};

start();