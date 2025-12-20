<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
	/* :root is equivalent to the <html> tag and makes variables globally available */
	:root {
		/* 1. Long Monospace Font Family (The "Monomaster") */
		--font-mono:
			ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono',
			monospace;

		--font-sans: Inter, Roboto, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif;
		font-weight: normal;

		/* 2. Monospace Base Size (For easier scaling of all mono elements) */
		--font-mono-size: 1.5rem; /* Increase base size by 15% */

		/* 3. Optional: Line Height Adjustment (Monospace often needs more room) */
		--line-height-mono: 1.6;
	}

	:global(body) {
		background-color: black;
		color: white;
		font-family: var(--font-sans);
	}

	:global(a) {
		color: hsla(193, 58%, 73%, 1);
	}

	:global(a:visited) {
		color: hsla(249, 58%, 73%, 0.9);
	}
	/* font-family: var(--font-family-mono-master); */
	/* Note: Setting font-size here can override component-level styles */
	/* font-size: var(--font-size-mono-base); */
</style>
