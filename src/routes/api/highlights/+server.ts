import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const response = await fetch('https://curius.app/api/users/3841/links');

	const data = await response.json();
	console.log('server returned data:', data);

	return json({
		highlights: data.userSaved
	});
};
