import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/Header";
import { HashRouter } from "react-router-dom";
import Routers from "./router/Router";
import { AuthContextProvider } from "../context/AuthContext";
import Latest from "./shared/Latest";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <HashRouter>
        <Header />
        <Latest/>
        <Routers />
      </HashRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
