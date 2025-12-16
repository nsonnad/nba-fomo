<script lang="ts">
	import Game from './Game.svelte';
	export let games;

	function formatDateKey(dateString) {
		// Use standard ISO format (YYYY-MM-DD) for grouping
		return new Date(dateString).toISOString().split('T')[0];
	}

	const gamesTodayOn = games.filter((game) => game.gameDate >= Date.now());

	const gamesByDate = gamesTodayOn.reduce((map, game) => {
		const dateKey = formatDateKey(game.gameDate);

		// Check if the Map already has an entry for this date
		if (!map.has(dateKey)) {
			// If not, create a new array for this date
			map.set(dateKey, []);
		}

		// Push the current game into the array for that date
		map.get(dateKey).push(game);

		return map;
	}, new Map());

	// You might want a nicer date format for the heading (e.g., "Mon, Dec 15")
	const displayFormatter = new Intl.DateTimeFormat('en-US', {
		weekday: 'short',
		month: 'short',
		day: 'numeric'
	});

	function formatDisplayDate(dateKey) {
		// Use the dateKey (YYYY-MM-DD) to create a Date object and format it
		return displayFormatter.format(new Date(dateKey));
	}
</script>

<div class="matchups">
	{#each [...gamesByDate] as [dateKey, dailyGames]}
		<h2 class="date-header">
			{formatDisplayDate(dateKey)}
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
	}
	h2.date-header {
		font-family: var(--font-mono);
	}
	.daily-game-group {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
