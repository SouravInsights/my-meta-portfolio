import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { DISCORD_TOKEN } from '$env/static/private';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';

const rest = new REST({ version: '10' }).setToken(DISCORD_TOKEN);

// Define the GET handler for the custom endpoint
export const GET: RequestHandler = async ({ params }) => {
	console.log('params channelId:', params.channelId);
	try {
		// Fetch messages from the specified Discord channel
		const response = await rest.get(Routes.channelMessages(params.channelId));

		return json({
			messages: response
		});
	} catch (error) {
		// Handle errors
		console.error(error);
		return json({
			error: 'Failed to fetch messages from Discord'
		});
	}
};
