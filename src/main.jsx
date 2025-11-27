import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";   // השורה שמכניסה את ה-CSS לבאנדל

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
