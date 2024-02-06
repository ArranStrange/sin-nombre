import React from "react";
import FindUs from "./components/FindUs";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App overflow-x-auto snap-x-mandatory">
      <NavBar />
      <div className="snap-center snap-align-start">
        <Landing />
      </div>
      <div className="snap-center snap-align-start">
        <FindUs />
      </div>
      <div className="snap-center snap-align-start">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
