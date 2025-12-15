<script>
	import teamInfo from '$lib/data/nbaTeamInfo';
	export let team;
	export let game;

	const currentTeam = teamInfo[team.abbrev];
	const teamSide = team.isHome === true ? 'home' : 'away';
	const teamPrimaryColor = currentTeam['mainColor'];
	const teamPrimaryColorHex = currentTeam['colors'][teamPrimaryColor].hex;
	const teamName = currentTeam.shortName;
</script>

<div class="game-team game-team-{teamSide}">
	<div class="game-team-name" style="background-color: {teamPrimaryColorHex};">
		<h2>{teamName}</h2>
	</div>
</div>

<style>
	.game-team-name {
		padding: 12px 6px;
	}
	h2 {
		padding: 0;
		margin: 0;
		font-family: var(--font-mono);
		font-size: var(--font-mono-size);
		color: white;
	}
	.game-team {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 35%;
	}

	.game-team-away {
		text-align: right;
	}
</style>
