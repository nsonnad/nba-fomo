<script lang="ts">
	import { timeFormat } from 'd3';
	import Game from './Game.svelte';
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
	.matchups {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	h2.date-header {
		font-family: var(--font-sans);
		font-weight: bold;
		text-align: center;
		margin: 10px 0 6px 0;
	}
	.daily-game-group {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	@media (max-width: 768px) {
		:global(.intro h1) {
			font-size: 2.5rem;
		}
	}
</style>
