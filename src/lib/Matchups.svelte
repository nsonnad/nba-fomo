<script lang="ts">
	import Game from './Game.svelte';
	export let games;
</script>

<div>
	<table>
		<tbody>
			<tr>
				<th>date</th>
				<th>away</th>
				<th></th>
				<th>home</th>
				<th>watchability</th>
				<th>netrtg</th>
				<th>diff</th>
				<th>a_health</th>
				<th>h_health</th>
			</tr>
			{#each games as game}
				<Game {game} />
			{/each}
		</tbody>
	</table>
</div>

<style>
	table {
		font-family: monospace;
		font-size: 1rem;
		border-collapse: collapse;
	}

	th {
		text-align: left;
		padding: 6px 10px;
	}
</style>
