import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./services/routes";
import theme from "./theme";

const query = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={query}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
       <RouterProvider router={router}></RouterProvider>
        <ReactQueryDevtools></ReactQueryDevtools>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
