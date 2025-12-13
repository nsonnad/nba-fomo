import type { PageLoad } from './$types';
import gamesData from '$lib/data/watchabilty.json';

export const load: PageLoad = ({ params }) => {
	gamesData.forEach((game) => {
		game.gameDate = new Date(game.gameDate);
	});

	return {
		games: gamesData.sort((a, b) => a.gameDate - b.gameDate)
	};
};
