import { extendTheme } from "@chakra-ui/react";
import { styles } from "./global-styles";

import { light, dark } from "./color-modes";
import { customColors } from "./custom-colors";
import { fonts } from "./fonts";

const colors = {
  mode: {
    light,
    dark,
  },
  primary: customColors.nyanza, //#E2FADB
  secondary: customColors.turquoise, //#4ECDC4
  accent: customColors.han, //#642BD6
  dark: customColors.gunmetal,
  deepDark: customColors.royalDark, //#05235E
  light: customColors.mintCream, //#F7FFF7
  bg1: customColors.emerald, //#138E76
  bg2: customColors.blueSapphire, //#086375
  gray1: customColors.blackCoral, //#4C5563
  gray2: customColors.charcoal, // #384251
  gray3: customColors.jet, // #363636
  brand: {
    100: customColors.royalDark,
    200: customColors.mintCream,
    300: customColors.nyanza,
    400: customColors.turquoise,
    500: customColors.emerald,
    600: customColors.blueSapphire,
    700: customColors.blackCoral,
    800: customColors.charcoal,
    900: customColors.jet,
    accent: customColors.han,
    dark: customColors.gunmetal,
  },
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const shadows = {
  bs: "0 12px 24px 0 rgba(0,0,0,0.09)",
};

export const theme = extendTheme({
  config,
  colors,
  styles,
  fonts,
  shadows,
});
