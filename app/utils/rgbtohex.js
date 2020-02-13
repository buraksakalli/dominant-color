'use strict';

const rgbToHex = (rgb) => {
  const hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

const colorHex = (color) => {
  const red = rgbToHex(color.red),
    green = rgbToHex(color.green),
    blue = rgbToHex(color.blue);

  return "#" + red + green + blue;
}

module.exports = colorHex;