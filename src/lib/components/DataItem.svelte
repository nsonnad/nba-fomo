<script>
	export let text;
	export let datapoint;
	export let colorScale = (d) => 'none';
	export let fontWeight = 'normal';
	import { getContrastTextColor } from '$lib/utils/getContrastTextColor';

	let textColor = 'black';

	const backgroundColor = colorScale(datapoint);
	if (backgroundColor === 'hsla(139, 70.5%, 34.5%, 0.8)') {
		textColor = 'white';
	}
</script>

<tr>
	<td style="font-weight: {fontWeight};">{text}</td>
	<td style="background-color: {backgroundColor}; color: {textColor}; font-weight: {fontWeight};"
		>{datapoint}</td
	>
</tr>

<style>
	td {
		padding: 6px;
		border-bottom: 1px solid lightgray;
		font-family: var(--font-mono);
		font-size: 0.8rem;
	}

	td:last-child {
		text-align: right;
	}
</style>
