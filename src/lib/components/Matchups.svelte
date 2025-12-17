<script lang="ts">
	import { timeFormat } from 'd3';
	import Game from './Game.svelte';
	import HomePage from '$lib/text/HomePage.svx';
	export let games;

	// You might want a nicer date format for the heading (e.g., "Mon, Dec 15")
	const displayFormatter = timeFormat('%A, %b %d');

	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const gamesTodayOn = games.filter((game) => game.gameDateParsed >= today);

	const gamesByDate = gamesTodayOn.reduce((map, game) => {
		const dateKey = displayFormatter(game.gameDateParsed);

		// Check if the Map already has an entry for this date
		if (!map.has(dateKey)) {
			// If not, create a new array for this date
			map.set(dateKey, []);
		}

		// Push the current game into the array for that date
		map.get(dateKey).push(game);

		return map;
	}, new Map());
</script>

<div class="intro">
	<HomePage />
</div>

<div class="matchups">
	{#each [...gamesByDate] as [dateKey, dailyGames]}
		<h2 class="date-header">
			{dateKey}
		</h2>

		<div class="daily-game-group">
			{#each dailyGames as game}
				<Game {game} />
			{/each}
		</div>
	{/each}
</div>

<style>
	.intro {
		font-family: var(--font-sans);
		text-align: center;
	}

	:global(.intro h1) {
		font-size: 3rem;
		font-weight: bold;
		text-shadow:
			2px 2px 0px #ffb7b2,
			/* Pastel Red/Pink */ 4px 4px 0px #ffdac1,
			/* Pastel Orange */ 6px 6px 0px #e2f0cb,
			/* Pastel Green */ 8px 8px 0px #b5ead7,
			/* Pastel Mint */ 10px 10px 0px #c7ceea,
			/* Pastel Blue/Purple */ 12px 12px 20px rgba(0, 0, 0, 0.1); /* Soft blur at the end */
	}
	:global(.intro p) {
		margin-bottom: 1rem;
	}

	.matchups {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	h2.date-header {
		font-family: var(--font-sans);
		font-weight: bold;
		text-align: center;
	}
	.daily-game-group {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
