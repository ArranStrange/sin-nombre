import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import NavDropDown from "./components/NavBar";
import ContactUsDropdown from "./components/ContactUs";
import { Route, Routes, useLocation } from "react-router-dom";
import MenuPage from "./components/MenuPage";

function App() {
  const location = useLocation();
  return (
    <div className="App overflow-x-auto snap-x-mandatory">
      <NavDropDown />
      <ContactUsDropdown />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
