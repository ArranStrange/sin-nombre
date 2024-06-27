import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import NavDropDown from "./components/NavBar";
import ContactUsDropdown from "./components/ContactUs";
import { Route, Routes, useLocation } from "react-router-dom";
import MenuPage from "./components/MenuPage";
import Gallery from "./components/Gallery";
import Events from "./components/Events/Events";
import Enquire from "./components/Enquire";

function App() {
  const location = useLocation();
  return (
    <div className="App overflow-x-auto snap-x-mandatory">
      <NavDropDown />
      <ContactUsDropdown />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Enquire" element={<Enquire />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
