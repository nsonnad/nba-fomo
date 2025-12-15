<script>
	export let text;
	export let datapoint;
	export let colorScale;

	import { fomoScaleText } from '$lib/utils/fomoColorScale';

	let textColor = 'black';

	const backgroundColor = colorScale(datapoint);
	if (backgroundColor === '#1a9641') {
		textColor = 'white';
	}
</script>

<tr>
	<td>{text}</td>
	<td style="background-color: {backgroundColor}; color: {textColor};">{datapoint}</td>
</tr>

<style>
	td {
		padding: 6px;
		border-bottom: 1px solid lightgray;
		font-family: var(--font-mono);
		font-size: 0.9rem;
	}

	td:last-child {
		text-align: right;
	}
</style>
