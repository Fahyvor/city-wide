import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import '@fontsource/montserrat';
import { useState } from "react";
// import About from "./pages/About";
// import ContactUs from "./pages/ContactUs";
// import Portfolio from "./pages/OurWorks";

function App() {
  // Initialize the dark theme state
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  return (
    <Router>
       <Nav />
        <Routes>
          <Route path="*" element={<div className="h-screen p-6 text-center flex items-center justify-center tracking-widest">404 || Page Not Found...</div>} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/our-works" element={<Portfolio />} /> */}
        </Routes>
        {/* <Footer /> */}
    </Router>
  );
}

export default App;
