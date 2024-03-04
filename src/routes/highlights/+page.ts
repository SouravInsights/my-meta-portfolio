import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const fetchHighlights = async () => {
		const response = await fetch('/api/highlights');
		const data = await response.json();
		console.log('Page fetched highlights:', data.highlights);
		return data.highlights;
	};

	return {
		highlights: await fetchHighlights()
	};
};
