<script lang="ts">
	import { scaleSequential, interpolateRdYlGn, scaleOrdinal, schemeRdYlGn, format } from 'd3';
	import Team from './Team.svelte';
	import GameCenter from './GameCenter.svelte';
	export let game;

	const colorScale = scaleSequential(interpolateRdYlGn).domain([25, 100]);
	const formatDec = format('.2f');
	const gameColor = colorScale(game.watchability_score);
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
	}
</style>
