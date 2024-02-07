import React from "react";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import NavDropDown from "./components/NavBar";
import FindUSCarousel from "./components/Carousel";
import ContactUsDropdown from "./components/ContactUs";

function App() {
  return (
    <div className="App overflow-x-auto snap-x-mandatory">
      <NavDropDown />
      <ContactUsDropdown />
      <div className="snap-center snap-align-start">
        <Landing />
      </div>
      <div className="snap-center snap-align-start">
        <FindUs />
      </div>
      <div className="snap-center snap-align-start">
        <FindUSCarousel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
