import type { PageLoad } from './$types';
import gamesData from '$lib/data/watchability_scores.json';

export const load: PageLoad = ({ params }) => {
	gamesData.forEach((game) => {
		game.gameDate = new Date(game.GAME_DATE_EST);
	});

	return {
		games: gamesData.sort((a, b) => a.gameDate - b.gameDate)
	};
};
