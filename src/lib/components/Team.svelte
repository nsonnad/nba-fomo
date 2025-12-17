<script>
	import { format } from 'd3-format';
	import teamInfo from '$lib/data/nbaTeamInfo';
	export let team;

	const teamSide = team.isHome === true ? 'home' : 'away';
	const currentTeam = teamInfo[team.abbrev];
	const teamPrimaryColor = currentTeam['mainColor'];
	const teamPrimaryColorHex = currentTeam['colors'][teamPrimaryColor].hex;
	const teamName = currentTeam.nickname;
	const teamShortName = currentTeam.hasOwnProperty('shortName') ? currentTeam.shortName : teamName;
	const teamRecord = `${team.wins}-${team.losses}`;
</script>

<div class="game-team game-team-{teamSide}" style="background-color: {teamPrimaryColorHex};">
	<div class="game-team-name">
		<h2 class="team-name-long">{teamName}</h2>
		<h2 class="team-name-short">{teamShortName}</h2>
		<h4 class="team-record">{teamRecord}</h4>
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

	.team-name-long {
		display: inline;
	}

	.team-name-short {
		display: none;
	}
	@media (max-width: 768px) {
		.game-team-name {
			padding: 20px 12px;
		}
		h2 {
			font-size: 1.2em;
		}
		h4 {
			font-size: 0.9em;
		}
		.team-name-long {
			display: none;
		}

		.team-name-short {
			display: inline;
		}
	}
</style>
