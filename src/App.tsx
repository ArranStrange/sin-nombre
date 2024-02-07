import React from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import NavDropDown from "./components/NavBar";
import FindUSCarousel from "./components/FindUsCarousel";
import ContactUsDropdown from "./components/ContactUs";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App overflow-x-auto snap-x-mandatory">
      <NavDropDown />
      <ContactUsDropdown />
      <div className="snap-center snap-align-start">
        <Landing />
      </div>
      <div className="snap-center snap-align-start">
        <AboutUs />
      </div>
      <div className="snap-center snap-align-start">
        <FindUSCarousel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
