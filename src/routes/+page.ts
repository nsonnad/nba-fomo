import type { PageLoad } from './$types';
import { timeParse } from 'd3';
import gamesData from '$lib/data/watchabilty.json';

const parseDate = timeParse('%Y-%m-%d');

export const load: PageLoad = () => {
  // 1. Use .map to create a new array with Date objects
  const processedGames = gamesData.map((game) => ({
    ...game,
    gameDateParsed: parseDate(game.gameDate) // Convert string to Date
  }));

  // 2. Sort using .getTime() for TypeScript compatibility
  processedGames.sort((a, b) => a.gameDateParsed.getTime() - b.gameDateParsed.getTime());

  return {
    games: processedGames
  };
};
