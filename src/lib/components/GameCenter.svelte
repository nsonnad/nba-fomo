<script>
	import FomoScore from './FomoScore.svelte';
	import DataItem from './DataItem.svelte';

	import {
		fomoScale,
		fomoScaleText,
		b2bAdjustScale,
		injuryAdjustScale,
		netRatingScale,
		netRatingDiffScale
	} from '$lib/utils/fomoColorScale';
	export let game;
</script>

<div class="game-center">
	<div class="game-info">
		<p>{game.gameDate.toLocaleDateString()}</p>
		<p>{game.gameTime}</p>
	</div>
	<div class="fomo-score">
		<span>
			<FomoScore text="fomo" score={game.watchability} />
			<table>
				<tbody>
					<DataItem colorScale={fomoScale} text="team quality" datapoint={game.teamQuality} />
					<DataItem
						colorScale={fomoScale}
						text="competitiveness"
						datapoint={game.competitiveness}
					/>
					<DataItem colorScale={b2bAdjustScale} text="b2b adjust" datapoint={game.b2bAdj} />
					<DataItem
						colorScale={injuryAdjustScale}
						text="injury adjust"
						datapoint={game.healthAdj}
					/>
				</tbody>
			</table>
		</span>
	</div>
</div>

<style>
	.game-center {
		flex-basis: 30%;
		text-align: center;
		width: 100%;
		padding: 0px;
	}
	.game-info {
		line-height: 0.5em;
	}
	table {
		text-align: left;
		font-family: var(--font-sans);
		width: 100%;
		border-collapse: collapse;
	}
	p {
		font-family: var(--font-sans);
		color: gray;
	}
</style>
