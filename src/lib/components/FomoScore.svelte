<script>
	export let score;
	export let text;
	import { fomoScale, fomoScaleText } from '$lib/utils/fomoColorScale';

	const color = fomoScale(score);
	const textColor = fomoScaleText(score);
</script>

<div class="fomo-score-outer">
	<div style="background-color: {color}; color: {textColor}" class="fomo-score">
		{score.toFixed(1)}
	</div>
</div>

<style>
	.fomo-score-outer {
		margin: 12px 0;
		display: flex;
		flex-direction: column;
	}
	.fomo-score {
		font-family: var(--font-mono);
		font-size: 1.75rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		padding: 12px;
		border-radius: 4px;
		font-weight: bold;
	}

	h3 {
		text-transform: uppercase;
		font-family: var(--font-sans);
		margin: 0;
	}
</style>
