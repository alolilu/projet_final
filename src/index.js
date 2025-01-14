import React from "react";
import ReactDOM from "react-dom/client"; // Import de createRoot
import App from "./App";

// Trouve l'élément racine
const rootElement = document.getElementById("root");

// Crée un root avec React 18
const root = ReactDOM.createRoot(rootElement);

// Rends l'application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
