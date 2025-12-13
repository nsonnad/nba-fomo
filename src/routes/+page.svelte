<script>
	import Matchups from '$lib/Matchups.svelte';
	export let data;
</script>

<main>
	<Matchups games={data.games} />
</main>

<style>
	main {
		width: 100%;
	}
</style>
