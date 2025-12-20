<script lang="ts">
	import { slide } from 'svelte/transition';
	import Team from './Team.svelte';
	import GameCenter from './GameCenter.svelte';
	import TeamData from './TeamData.svelte';
	import GameData from './GameData.svelte';
	export let game;

	let isExpanded = false;

	// 2. Define the toggle function.
	function toggleExpanded() {
		isExpanded = !isExpanded;
	}

	function handleKey(event) {
		// Check if the key pressed is Enter (keyCode 13) or Space (keyCode 32)
		if (event.keyCode === 13 || event.keyCode === 32) {
			event.preventDefault(); // Prevent default scroll action for Space
			toggleExpanded();
		}
	}
</script>

<div
	class="game"
	on:click={toggleExpanded}
	role="button"
	on:keydown={handleKey}
	tabindex="0"
	class:expanded={isExpanded}
>
	<Team {game} team={game.teams[1]} {isExpanded} />
	<GameCenter {game} {isExpanded} />
	<Team {game} team={game.teams[0]} {isExpanded} />
	{#if isExpanded}
		<TeamData team={game.teams[1]} {game} />
		<GameData {game} />
		<TeamData team={game.teams[0]} {game} />
	{/if}
</div>

<style>
	.game {
		cursor: pointer;
		display: grid;
		grid-template-columns: 35% 30% 35%;
		gap: 0;
		width: 100%;
		border: 1px solid hsla(249, 0%, 73%, 0.9);
		background-color: white;
		/* 1. Define the Initial Shadow */
		box-shadow: 6px 6px hsla(141, 0%, 65%, 0.5);

		/* 2. Set the Transition for a Smooth Animation */
		/* Target box-shadow over 0.3 seconds with an ease-out timing function */
		transition:
			box-shadow 0.2s ease-out,
			transform 0.2s ease-out;
	}

	/* 3. Define the Hover State (The Animated State) */
	.game:hover {
		box-shadow: 6px 10px 10px 5px hsla(141, 0%, 65%, 0.47);
	}
</style>
