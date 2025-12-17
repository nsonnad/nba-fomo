<script>
	import About from './About.svx';
</script>

<main class="container">
	<About />
</main>

<style>
	:global(.container) {
		font-family: var(--font-sans);
	}
	:global(.container h1) {
		font-size: 3rem;
		font-weight: bold;
		text-shadow:
			2px 2px 0px #ffb7b2,
			/* Pastel Red/Pink */ 4px 4px 0px #ffdac1,
			/* Pastel Orange */ 6px 6px 0px #e2f0cb,
			/* Pastel Green */ 8px 8px 0px #b5ead7,
			/* Pastel Mint */ 10px 10px 0px #c7ceea,
			/* Pastel Blue/Purple */ 12px 12px 20px rgba(0, 0, 0, 0.1); /* Soft blur at the end */
	}
	:global(.container p) {
		margin-bottom: 1rem;
	}
</style>
