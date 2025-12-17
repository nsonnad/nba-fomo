<script>
	export let text;
	export let datapoint;
	export let colorScale = (d) => 'none';
	export let fontWeight = 'normal';
	export let align = 'left';
	import { getContrastTextColor } from '$lib/utils/getContrastTextColor';

	let textColor = 'black';

	const backgroundColor = colorScale(datapoint);
	if (backgroundColor === 'hsla(139, 70.5%, 34.5%, 0.8)') {
		textColor = 'white';
	}
</script>

<div class="data-row data-row-{align}">
	<span class="label" style="font-weight: {fontWeight};">{text}</span>
	<span
		class="value"
		style="background-color: {backgroundColor}; color: {textColor}; font-weight: {fontWeight};"
		>{datapoint}</span
	>
</div>

<style>
	.data-row {
		display: flex;
		justify-content: space-between; /* Desktop: Label left, Value right */
		padding: 0;
		border-bottom: 1px solid #eee;
		line-height: 1em;
		font-family: var(--font-mono);
		font-size: 0.9em;
		/* Breaks the word only if it would overflow the container */
		/* 1. Try to wrap normally at spaces first */
		white-space: normal;

		/* 2. If a single word is too long for the whole line, break it */
		overflow-wrap: anywhere;
	}

	.label {
		color: #666;
		padding: 8px 6px;
	}

	.value {
		padding: 8px 6px;
	}

	@media (max-width: 768px) {
		.data-row {
			flex-direction: column; /* Mobile: Stack label over value */
			align-items: flex-start;
			gap: 2px;
		}

		.data-row-right {
			align-items: flex-end;
			text-align: right;
		}

		.data-row-center {
			align-items: center;
			text-align: center;
		}

		.label {
			font-size: 0.8rem;
			margin-top: 4px;
			padding: 2px 6px;
		}

		.value {
			font-weight: bold;
			font-size: 0.9rem;
			padding: 6px;
		}
	}
</style>
