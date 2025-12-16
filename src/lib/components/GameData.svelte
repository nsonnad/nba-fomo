<script>
	import DataItem from './DataItem.svelte';
	export let game;

	import { fomoScale, b2bAdjustScale, injuryAdjustScale } from '$lib/utils/fomoColorScale';
</script>

<div class="game-data">
	<table>
		<tbody>
			<DataItem colorScale={fomoScale} text="team quality" datapoint={game.teamQuality} />
			<DataItem colorScale={fomoScale} text="competitiveness" datapoint={game.competitiveness} />
			<DataItem colorScale={b2bAdjustScale} text="b2b adjust" datapoint={game.b2bAdj} />
			<DataItem colorScale={injuryAdjustScale} text="injury adjust" datapoint={game.healthAdj} />
		</tbody>
	</table>
</div>

<style>
	table {
		text-align: left;
		font-family: var(--font-sans);
		width: 100%;
		border-collapse: collapse;
	}
</style>
