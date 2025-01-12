import { Header } from "../components/layout/Header";

import { Contact } from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import { Approach } from "../components/sections/Approach";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Approach />

      <Contact />
    </div>
  );
}

export default Home;
