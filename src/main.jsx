import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routers/>
    </BrowserRouter>
  </React.StrictMode>
);
