import { extendTheme } from "@chakra-ui/react";
import { color } from "./colors.js";
export const myNewTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: { ...color },
  fonts: {
    nav: "IBM Plex Sans",
  },
  darkMode: {
    colors: {
      background: "#000",
      secondary: "#fff",
    },
  },
});
