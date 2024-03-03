import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/flowbite/dist/flowbite.css";
import "./index.css";
// primereact toast
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-dark-indigo/theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);
