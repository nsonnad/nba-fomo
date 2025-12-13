<script>
	export let team;
	export let game;

	const teamSide = team.isHome === true ? 'home' : 'away';
</script>

<div class="game-team game-team-{teamSide}">
	<h2>{team.abbrev}</h2>
</div>

<style>
	.game-team {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 40%;
	}

	.game-team-away {
		text-align: right;
	}
</style>
