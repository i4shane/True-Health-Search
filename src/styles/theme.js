import { extendTheme } from "@chakra-ui/react";
import { color } from "./colors.js";

export const myNewTheme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        color: props.colorMode === "dark" ? "white" : "black",
      },
    }),
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: { ...color },
  fonts: {
    nav: "IBM Plex Sans",
  },
});
