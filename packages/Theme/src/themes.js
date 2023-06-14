import { baseColorsDark, baseColorsLight } from "./baseColors";
import { clientColors, vendorColors } from "./mainColors";
import SIZES from "./sizes";
import typography from "./typography";

const baseLightTheme = {
  ...SIZES,
  ...typography,
  ...baseColorsLight
};

const baseDarkTheme = {
  ...SIZES,
  ...typography,
  ...baseColorsDark
};

const client = {
  light: {
    ...baseLightTheme,
    ...clientColors
  },
  dark: {
    ...baseDarkTheme,
    ...clientColors
  }
};

const vendor = {
  light: {
    ...baseLightTheme,
    ...vendorColors
  },
  dark: {
    ...baseDarkTheme,
    ...vendorColors
  }
};

export { client, vendor };
