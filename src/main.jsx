import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import Routers from "./routes";
import { AuthContextProvider } from "../context/AuthContext";
import {Latest} from "./shared";
import { Header,Footer } from "./components";
import ScrollToTop from "./ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <HashRouter>
        <ScrollToTop/>
        <Header />
        {/* <Latest/> */}
        <Routers />
        <Footer/>
      </HashRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
