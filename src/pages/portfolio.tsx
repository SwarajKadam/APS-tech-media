import { useState } from "react";
import { Header } from "../components/layout/Header";
import Hero from "../components/portfoilio-components/p-hero";
// import ProjectFilter from "../components/portfoilio-components/p-filter";
import ProjectGrid from "../components/portfoilio-components/p-grid";
import { portfolioProjects } from "../portfolio-data/portfolioData";
import SplashCursor from "../components/shared/SplashCursir";

function App() {
  // @ts-ignore
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = portfolioProjects.filter(
    // @ts-ignore
    (project) =>
      activeFilter === "all" /**|| project.category === activeFilter**/
  );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-slate-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <SplashCursor />
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        {/* <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} /> */}

        <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ProjectGrid projects={displayedProjects} />

          {filteredProjects.length > 6 && !showAll && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition-all hover:scale-105"
              >
                Load More
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
