<script>
	import { format } from 'd3-format';
	import teamInfo from '$lib/data/nbaTeamInfo';
	export let team;

	const teamSide = team.isHome === true ? 'home' : 'away';
	const currentTeam = teamInfo[team.abbrev];
	const teamPrimaryColor = currentTeam['mainColor'];
	const teamPrimaryColorHex = currentTeam['colors'][teamPrimaryColor].hex;
	const teamName = currentTeam.shortName;
	const teamRecord = `${team.wins}-${team.losses}`;
</script>

<div class="game-team game-team-{teamSide}">
	<div class="game-team-name" style="background-color: {teamPrimaryColorHex};">
		<h2>{teamName}</h2>
		<h4>{teamRecord}</h4>
	</div>
</div>

<style>
	.game-team-name {
		padding: 20px;
	}
	h2,
	h4 {
		font-family: var(--font-mono);
		color: white;
	}
	h2 {
		font-weight: bold;
		padding: 0;
		margin: 0;
		font-size: var(--font-mono-size);
	}
	h4 {
		margin: 4px 0 0 0;
		padding: 0;
	}
	table {
		width: 100%;
	}
	.game-team {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 35%;
	}

	.game-team-away {
		text-align: left;
		border-right: 1px solid black;
	}
	.game-team-home {
		text-align: right;
		border-left: 1px solid black;
	}
</style>
