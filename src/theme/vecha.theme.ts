import { extendTheme, colors, ColorScheme } from "@vechaiui/react";

const cool: ColorScheme = {
  id: "cool",
  type: "light",
  colors: {
    bg: {
      base: colors.white,
      fill: colors.white,
    },
    text: {
      foreground: colors.black,
      muted: colors.black,
    },
    primary: colors.blue,
    neutral: colors.coolGray,
  },
};

const theme = extendTheme({
  cursor: "pointer",
  colorSchemes: { cool },
});

export default theme;
