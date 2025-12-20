<script>
	import HomePage from '$lib/text/HomePage.svx';
	import Matchups from '$lib/components/Matchups.svelte';
	export let data;
</script>

<main>
	<div class="intro">
		<HomePage />
	</div>

	<Matchups games={data.games} />
</main>

<style>
	main {
		max-width: 700px;
		margin: 0 auto;
	}

	.intro {
		font-family: var(--font-sans);
		text-align: center;
	}

	:global(.intro h1) {
		font-size: 3.5rem;
		font-weight: bold;
		-webkit-text-stroke: 1px black;
		text-shadow:
			2px 2px 0px #ffb7b2,
			/* Pastel Red/Pink */ 4px 4px 0px #ffdac1,
			/* Pastel Orange */ 6px 6px 0px #e2f0cb,
			/* Pastel Green */ 8px 8px 0px #b5ead7,
			/* Pastel Mint */ 10px 10px 0px #c7ceea,
			/* Pastel Blue/Purple */ 12px 12px 20px rgba(0, 0, 0, 0.1); /* Soft blur at the end */
	}
	:global(.intro p) {
		margin-bottom: 1rem;
	}
</style>
