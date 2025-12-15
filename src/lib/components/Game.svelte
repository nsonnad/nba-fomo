<script lang="ts">
	import Team from './Team.svelte';
	import GameCenter from './GameCenter.svelte';
	export let game;

	console.log(game);
</script>

<div class="game">
	<Team {game} team={game.teams[0]} />
	<GameCenter {game} />
	<Team {game} team={game.teams[1]} />
</div>

<style>
	.game {
		display: flex;
		flex-direction: row;
		border: 1px solid black;
		/* 1. Define the Initial Shadow */
		box-shadow: 6px 6px rgba(0, 0, 0, 0.2);

		/* 2. Set the Transition for a Smooth Animation */
		/* Target box-shadow over 0.3 seconds with an ease-out timing function */
		transition:
			box-shadow 0.2s ease-out,
			transform 0.2s ease-out;
	}

	/* 3. Define the Hover State (The Animated State) */
	/* .game:hover { */
	/* 	box-shadow: 6px 10px 10px 5px rgba(0, 0, 0, 0.3); */
	/* } */
</style>
