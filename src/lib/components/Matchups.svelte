<script lang="ts">
	import Game from './Game.svelte';
	export let games;
</script>

<div class="matchups">
	{#each games as game}
		<Game {game} />
	{/each}
</div>

<style>
	.matchups {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
