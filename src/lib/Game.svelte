<script lang="ts">
	import { scaleSequential, interpolateRdYlGn, scaleOrdinal, schemeRdYlGn, format } from 'd3';
	export let game;

	const colorScale = scaleSequential(interpolateRdYlGn).domain([25, 100]);
	const formatDec = format('.2f');
	const gameColor = colorScale(game.watchability_score);
	console.log(game);
</script>

<tr style="background-color: {gameColor};">
	<td>{game.gameDate.getMonth() + 1}/{game.gameDate.getDate() + 1}</td>
	<td>{game.away_team}</td>
	<td>@</td>
	<td>{game.home_team}</td>
	<td class="number">{formatDec(game.watchability_score)}</td>
	<td class="number">{game.netrtg_sum}</td>
	<td class="number">{game.netrtg_diff}</td>
	<td class="number">{formatDec(game.away_team_health)}</td>
	<td class="number">{formatDec(game.home_team_health)}</td>
</tr>

<style>
	td {
		padding: 6px 10px;
	}
	td.number {
		text-align: right;
	}
</style>
