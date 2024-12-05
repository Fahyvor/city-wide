import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import '@fontsource/montserrat';
import { useState } from "react";
import About from "./pages/About";
import Services from "./pages/Services";
import Properties from "./pages/Properties";
import GetInTouch from "./pages/GetInTouch";

function App() {

  return (
    <Router>
       <Nav />
        <Routes>
          <Route path="*" element={<div className="h-screen p-6 lg:pt-[10%] md:pt-[15%] pt-[25%] text-center flex items-center justify-center tracking-widest">404 || Page Not Found...</div>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
