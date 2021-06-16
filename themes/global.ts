import { mode, Styles } from "@chakra-ui/theme-tools";
import { colorCSSVariables } from "./colors";

const globalStyles = (props: Styles) => ({
  ":root": {
    ...colorCSSVariables,
  },
  "html, body": {
    "font-size": "100%",
    "-webkit-text-size-adjust": "100%",
    "font-variant-ligatures": "none",
    "-webkit-font-variant-ligatures": "none",
    "text-rendering": "optimizeLegibility",
    "-moz-osx-font-smoothing": "grayscale",
    "font-smoothing": "antialiased",
    "-webkit-font-smoothing": "antialiased",
    textShadow: "rgba(0, 0, 0, .01) 0 0 1px",
  },
  // body: {
  //   color: mode("brand.dark", "brand.light")(props),
  //   backgroundColor: mode("brand.light", "brand.dark")(props),
  // },
});

export default globalStyles;
