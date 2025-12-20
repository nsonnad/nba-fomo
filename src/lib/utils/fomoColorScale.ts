import { scaleThreshold, scaleQuantile } from 'd3';

// const FOMO_COLORS = ['#d53b19', '#fdae61', '#a6d96a', '#1a9641'];
const FOMO_COLORS = [
  // Low Score (Red/High Opacity): Red Hue (0), High Saturation, Medium Lightness
  'hsla(11, 79%, 46.7%, 0.8)',
  // Mid Score (Orange/Medium Opacity)
  'hsla(40, 97.5%, 68.6%, 1)',
  // High Score (Green/Low Opacity)
  'hsla(88, 59.4%, 63.3%, 1)',
  // Elite Score (Darker Green/Very Low Opacity)
  'hsla(139, 70.5%, 34.5%, 0.8)'
];

const FOMO_COLORS_REVERSED = [...FOMO_COLORS].reverse();

export const fomoScale = scaleThreshold()
  .domain([50, 70, 90]) // The threshold values where the color changes
  .range(FOMO_COLORS);

export const fomoScaleText = scaleThreshold()
  .domain([50, 70, 90]) // The threshold values where the color changes
  .range(['black', 'black', 'black', 'white']);

export const b2bAdjustScale = scaleThreshold().domain([-10, -5, 0]).range(FOMO_COLORS);

export const injuryAdjustScale = scaleThreshold().domain([-10, -5, -0.5]).range(FOMO_COLORS);

export const netRatingScale = scaleThreshold().domain([-15, 0, 15]).range(FOMO_COLORS);
export const netRatingDiffScale = scaleThreshold().domain([5, 10, 15]).range(FOMO_COLORS_REVERSED);

export const createFomoScale = (values: []) => {
  // 1. Create the Quantile Scale
  return scaleQuantile()
    .domain(values) // Pass the raw data array
    .range(FOMO_COLORS); // Pass the desired 4 output color
};
