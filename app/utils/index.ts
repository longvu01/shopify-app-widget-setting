export const checkIsHexColor = (color: string) => /^#[0-9A-F]{6}$/i.test(color);

export const hex2Hsb = (hex: string) => {
  // Convert hex to RGB first
  let r = parseInt(hex.substring(1, 3), 16) / 255;
  let g = parseInt(hex.substring(3, 5), 16) / 255;
  let b = parseInt(hex.substring(5, 7), 16) / 255;

  // Find min and max values of RGB
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  // Calculate Brightness
  let brightness = max;

  // Calculate Saturation
  let saturation = max === 0 ? 0 : (max - min) / max;

  // Calculate Hue
  let hue;
  if (max === min) {
    hue = 0; // undefined hue
  } else if (max === r) {
    hue = (g - b) / (max - min);
  } else if (max === g) {
    hue = 2 + (b - r) / (max - min);
  } else {
    hue = 4 + (r - g) / (max - min);
  }

  hue = Math.min(hue * 60, 360);
  if (hue < 0) {
    hue += 360;
  }

  return {
    hue,
    saturation,
    brightness,
    alpha: 1,
  };
};
