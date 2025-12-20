<script>
	import FomoScore from './FomoScore.svelte';
	import GameData from './GameData.svelte';

	export let game;
</script>

<div class="game-center">
	<FomoScore text="fomo" score={game.watchability} />
</div>

<style>
	.game-center {
		display: flex;
		flex-direction: column;
		flex-basis: 30%;
		text-align: center;
		width: 100%;
		padding: 12px 0;
		gap: 20px;
	}
</style>
