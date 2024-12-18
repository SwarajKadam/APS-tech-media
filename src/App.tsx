
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';
import ParticleBackground from "./components/sections/test";
// import Morphing from './components/sections/morphingCircleText';


function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <ParticleBackground />
        {/* <Morphing/> */}
        
      </main>
      <Footer />
    </div>
  );
}

export default App;