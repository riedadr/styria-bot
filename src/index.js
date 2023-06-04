import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";
dotenv.config()

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.DirectMessages,
	],
});

client
	.login(process.env.DISCORD_TOKEN)
	.then((e) => console.log("client logged in", e))
	.catch((e) => console.error("error", e));

client.on("messageCreate", async (message) => {
	message.member.roles.cache.map(r => r.name);
	console.log(message);
});

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	if(interaction.commandName === "hey") {
		await interaction.reply("Hello, World!");
	}
	if(interaction.commandName === "ping") {
		await interaction.reply("ping!");
	}
})