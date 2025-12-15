<script>
	import Matchups from '$lib/components/Matchups.svelte';
	export let data;
</script>

<main>
	<Matchups games={data.games} />
</main>

<style>
	main {
		max-width: 700px;
		margin: 0 auto;
	}
</style>
