import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/layout/Header";
import Home from "./pages/home";
import { Footer } from "./components/layout/Footer";
import Portfolio from "./pages/portfolio";
import ProjectDetail from "./pages/projectDetail";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Router>
        <ScrollToTop/>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
