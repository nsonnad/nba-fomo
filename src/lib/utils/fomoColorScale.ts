import { scaleThreshold, scaleQuantile } from 'd3';

const FOMO_COLORS = ['#d53b19', '#fdae61', '#a6d96a', '#1a9641'];

export const fomoScale = scaleThreshold()
	.domain([50, 70, 90]) // The threshold values where the color changes
	.range(FOMO_COLORS);

export const fomoScaleText = scaleThreshold()
	.domain([50, 70, 90]) // The threshold values where the color changes
	.range(['black', 'black', 'black', 'white']);

export const b2bAdjustScale = scaleThreshold().domain([-10, -5, 0]).range(FOMO_COLORS);

export const injuryAdjustScale = scaleThreshold().domain([-2, -1, -0.5, 0]).range(FOMO_COLORS);

export const createFomoScale = (values: []) => {
	// 1. Create the Quantile Scale
	return scaleQuantile()
		.domain(values) // Pass the raw data array
		.range(FOMO_COLORS); // Pass the desired 4 output color
};
