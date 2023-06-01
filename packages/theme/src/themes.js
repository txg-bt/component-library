import { baseColorsDark, baseColorsLight } from "./baseColors";
import SIZES from "./sizes";

const baseLightTheme = {
  ...SIZES,
  ...baseColorsLight,
};

const baseDarkTheme = {
  ...SIZES,
  ...baseColorsDark,
};

const client = {
  light: {
    ...baseLightTheme,
  },
  dark: {
    ...baseDarkTheme,
  },
};

const vendor = {
  light: {
    ...baseLightTheme,
  },
  dark: {
    ...baseDarkTheme,
  },
};

export { client, vendor };
