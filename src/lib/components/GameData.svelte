<script>
	import DataItem from './DataItem.svelte';
	import localizeGameTime from '$lib/utils/localizeGameTime';
	import { fomoScale, b2bAdjustScale, injuryAdjustScale } from '$lib/utils/fomoColorScale';
	export let game;
	const gameTime = localizeGameTime(game.gameTime);
</script>

<div class="game-data">
	<DataItem
		colorScale={fomoScale}
		text="team quality"
		datapoint={game.teamQuality}
		align="center"
	/>
	<DataItem
		colorScale={fomoScale}
		text="team parity"
		datapoint={game.competitiveness}
		align="center"
	/>
	<DataItem
		colorScale={b2bAdjustScale}
		text="b2b adjust"
		datapoint={game.b2bAdj.toFixed(1)}
		align="center"
	/>
	<DataItem
		colorScale={injuryAdjustScale}
		text="injury adjust"
		datapoint={game.healthAdj}
		align="center"
	/>
	<DataItem text="game time" datapoint={gameTime} align="center" />
</div>

<style>
</style>
