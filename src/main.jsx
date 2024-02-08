import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { myNewTheme } from "./styles/theme.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
 <BrowserRouter>
  <ChakraProvider theme={myNewTheme}>
    <ColorModeScript initialColorMode={myNewTheme.config.initialColorMode} />
    <App />
  </ChakraProvider>
 </BrowserRouter>

);
