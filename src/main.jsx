import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Letter from "./letter";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/letter" element={<Letter />} />
    </Routes>
  </HashRouter>
);