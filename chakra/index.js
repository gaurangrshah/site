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
  brand: {
    100: customColors.royalDark, //#05235E
    200: customColors.mintCream, //#F7FFF7
    300: customColors.nyanza, //#E2FADB
    400: customColors.turquoise, //#4ECDC4
    500: customColors.emerald, //#138E76
    600: customColors.blueSapphire, //#086375
    700: customColors.blackCoral, //#4C5563
    800: customColors.charcoal, //#384251
    900: customColors.jet, //#363636
    accent: customColors.han, //#642BD6
    dark: customColors.gunmetal, //#242F40
  },
};
const config = {
  initialColorMode: "dark",
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
