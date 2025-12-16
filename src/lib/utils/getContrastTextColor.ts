import { color } from 'd3';

/**
 * Determines the ideal text color (black or white) for a given background color.
 * * @param {string} backgroundColor - The input color string (e.g., '#d7191c', 'hsla(...)').
 * @param {number} threshold - The luminance threshold (0 to 100) to distinguish dark vs. light.
 * A common value is around 50 or 60.
 * @returns {string} Either 'black' or 'white'.
 */
export const getContrastTextColor = (backgroundColor, threshold = 60) => {
  try {
    // 1. Convert the input color string (Hex, RGB, HSL, etc.) to a D3 color object.
    const c = color(backgroundColor);

    // Safety check: If color() fails to parse the string, return black as default.
    if (!c) {
      console.warn('Invalid color input:', backgroundColor);
      return 'black';
    }

    // 2. Convert to HSL color space to easily access Lightness (l).
    // Lightness is a value from 0 (black) to 1 (white).
    // We multiply by 100 for a 0-100 scale for easier threshold comparison.
    const luminance = c.hsl().l * 100;

    // 3. Apply the threshold check.
    // If the color is "darker" than the threshold, use white text.
    // If the color is "lighter" than the threshold, use black text.
    if (luminance < threshold) {
      return 'white'; // Background is dark
    } else {
      return 'black'; // Background is light
    }
  } catch (e) {
    console.error('Error processing color:', e);
    return 'black';
  }
};
