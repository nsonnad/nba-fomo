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
	const dataItemAlign = team.isHome ? 'right' : 'left';
</script>

<div class="team-data team-data-{teamSide}">
	<div class="team-data-main">
		<DataItem text="net rating" datapoint={netRtgStr} align={dataItemAlign} />
		<DataItem text="off. rating" datapoint={offRtgStr} align={dataItemAlign} />
		<DataItem text="def. rating" datapoint={defRtgStr} align={dataItemAlign} />
		<DataItem text="b2b" datapoint={team.isb2b} align={dataItemAlign} />
		<DataItem text="health" datapoint={team.health.toFixed(2)} align={dataItemAlign} />
	</div>
	{#if hasInjuredPlayers}
		<div class="team-data-injuries">
			<h5 class="injuries injuries-{dataItemAlign}">>> injuries</h5>
			{#each team.injuredPlayers as p, i}
				{#if i === 0}
					<DataItem
						text={p.playerName}
						datapoint={`pie: ${p.pie.toFixed(3)}`}
						align={dataItemAlign}
					/>
				{:else}
					<DataItem text={p.playerName} datapoint={p.pie.toFixed(3)} align={dataItemAlign} />
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style>
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
		color: black;
	}

	@media (max-width: 768px) {
		.injuries-right {
			text-align: right;
		}
		.injuries-left {
			text-align: left;
		}
		h5 {
			padding: 3px 6px;
		}
	}
</style>
