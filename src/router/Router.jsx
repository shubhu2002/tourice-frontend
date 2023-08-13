import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Tour from "../pages/Tour";
import Contact from "../pages/Contact"
import Login from "../pages/Login";
import SearchResult from "../pages/SearchResult";
import TourDetail from "../pages/TourDetail";
import ThankYou from "../pages/ThankYou";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" Component={() => <Home />} />
      <Route exact path="/about" Component={() => <About />} />
      <Route exact path="/tour" Component={() => <Tour />} />
      <Route exact path="/contact" Component={() => <Contact/>} />
      <Route exact path="/login-register" Component={() => <Login />} />
      <Route exact path="/tour/search" Component={() => <SearchResult />} />
      <Route exact path="/tour/:id" Component={() => <TourDetail />} />
      <Route exact path="/booking-confirm" Component={() => <ThankYou />} />
    </Routes>
  );
};

export default Routers;
