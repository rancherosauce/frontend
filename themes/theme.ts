import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import globalStyles from "./global";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "orange",
  }),
  {
    config,
    styles: { global: globalStyles },
    colors: {
      brand: {
        light: "var(--color-1)",
        dark: "var(--color-5)",
      },
    },
  }
);

export default theme;
