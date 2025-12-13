<script lang="ts">
	import Game from './Game.svelte';
	export let games;
</script>

<div>
	{#each games as game}
		<Game {game} />
	{/each}
</div>

<style>
</style>
