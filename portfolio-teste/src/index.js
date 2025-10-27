import React from "react";
import ReactDOM from "react-dom/client";
import App from "../portfolio-teste/src/App";
import './index.css'; // se tiver estilos globais

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
