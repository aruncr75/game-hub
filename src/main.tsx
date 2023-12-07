import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const query = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={query}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
        <ReactQueryDevtools></ReactQueryDevtools>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
