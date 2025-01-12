import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/layout/Header";
import Home from "./pages/home";
import { Footer } from "./components/layout/Footer";
import Portfolio from "./pages/portfolio";
import ProjectDetail from "./pages/projectDetail";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
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
