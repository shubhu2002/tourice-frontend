import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Tour from "./pages/Tour";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SearchResult from "./pages/SearchResult";
import TourDetail from "./pages/TourDetail";
import ThankYou from "./pages/ThankYou";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/tour" element={<Tour />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/login-register" element={<Login />} />
      <Route exact path="/tour/search" element={<SearchResult />} />
      <Route exact path="/tour/:id" element={<TourDetail />} />
      <Route exact path="/booking-confirm" element={<ThankYou />} />
    </Routes>
  );
};

export default Routers;
