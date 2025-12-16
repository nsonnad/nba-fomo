<script>
	import { format } from 'd3';
	import DataItem from './DataItem.svelte';
	import teamInfo from '$lib/data/nbaTeamInfo';

	export let team;

	const teamSide = team.isHome ? 'home' : 'away';
	const signedFormat = format('+.1f');
	const netRtgStr = `${signedFormat(team.netRating)} (#${team.netRatingRank})`;
	const offRtgStr = `${team.offRating} (#${team.offRatingRank})`;
	const defRtgStr = `${team.defRating} (#${team.defRatingRank})`;

	const currentTeam = teamInfo[team.abbrev];
	const teamPrimaryColor = currentTeam['mainColor'];
	const teamPrimaryColorHex = currentTeam['colors'][teamPrimaryColor].hex;
	const hasInjuredPlayers = team.injuredPlayers.length > 0;
	console.log(hasInjuredPlayers);
</script>

<div class="team-data team-data-{teamSide}">
	<table>
		<tbody>
			<DataItem text="net rating" datapoint={netRtgStr} />
			<DataItem text="off. rating" datapoint={offRtgStr} />
			<DataItem text="def. rating" datapoint={defRtgStr} />
			<DataItem text="b2b" datapoint={team.isb2b} />
			<DataItem text="health" datapoint={team.health.toFixed(2)} />
		</tbody>
	</table>
	{#if hasInjuredPlayers}
		<h5>injuries</h5>
		<table>
			<tbody>
				<DataItem text="player" datapoint="pie" fontWeight="bold" />
				{#each team.injuredPlayers as p}
					<DataItem text={p.name} datapoint={p.pie} />
				{/each}
			</tbody>
		</table>
	{/if}
</div>

<style>
	table {
		text-align: left;
		font-family: var(--font-sans);
		width: 100%;
		border-collapse: collapse;
	}
	.team-data-home {
		border-left: 1px solid black;
	}
	.team-data-away {
		border-right: 1px solid black;
	}
	h5 {
		padding: 6px;
		margin: 6px 0;
		font-family: var(--font-mono);
		text-align: center;
	}
</style>
