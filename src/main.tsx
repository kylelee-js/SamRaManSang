import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./components/App/App";
import "./styles/index.css";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
