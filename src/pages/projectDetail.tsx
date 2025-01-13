import { useState, useEffect } from "react";
import { ArrowLeft, ChevronRight, MapPin, Building } from "lucide-react";
import { useParams } from "react-router-dom";
import { portfolioProjects } from "../portfolio-data/portfolioData";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioProjects.find((proj) => proj.id === id);
  const [activeTab, setActiveTab] = useState("overview");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Project Not Found</h2>
          <p className="mt-2">The project you're looking for doesn't exist.</p>
          <button className="mt-4 inline-flex items-center px-4 py-2 bg-gray-800 text-gray-300 rounded-md hover:bg-gray-700">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "results", label: "Results" },
    { id: "approach", label: "Approach" },
  ];

  const parallaxOffset = scrollPosition * 0.5;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section with Parallax */}
      <div className="relative h-96 overflow-hidden">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover scale-110"
            onLoad={() => setIsImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <FadeInSection>
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-gray-400">
                  <div className="flex items-center hover:text-gray-100">
                    <Building className="w-4 h-4 mr-2" />
                    {project.client}
                  </div>
                  <div className="flex items-center hover:text-gray-100">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-800 rounded-xl shadow-sm">
          {/* Tabs */}
          <div className="border-b border-gray-700">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative py-4 px-1 border-b-2 font-medium text-sm transition-all ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "overview" && (
              <div className="space-y-8">
                <FadeInSection delay={100}>
                  <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                    <h2 className="text-xl font-semibold text-blue-400 mb-4">
                      Project Objective
                    </h2>
                    <p>{project.objective}</p>
                  </div>
                </FadeInSection>

                <FadeInSection delay={200}>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Project Link</h2>
                    <p>
                      Click on the link to navigate to the website -{" "}
                      <a
                        href={project.link}
                        className="text-blue-400 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.link}
                      </a>
                    </p>
                  </div>
                </FadeInSection>

                <FadeInSection delay={200}>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Project Overview
                    </h2>
                    <p>{project.overview}</p>
                  </div>
                </FadeInSection>
                <FadeInSection delay={200}>
                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Project Outcome
                    </h2>
                    <p>{project.outcome?.summary}</p>
                  </div>
                </FadeInSection>
              </div>
            )}

            {activeTab === "results" && (
              <div className="space-y-6">
                {project.keyResults.map((result, index) => (
                  <FadeInSection key={index} delay={index * 100}>
                    <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                      <h3 className="text-lg font-semibold mb-4">
                        {result.title}
                      </h3>
                      <ol className="space-y-4">
                        {result.points.map((point, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-blue-400 mr-2" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            )}

            {activeTab === "approach" && (
              <div className="space-y-6">
                <ol className="space-y-6">
                  {project.approach.map((app, idx) => (
                    <FadeInSection key={idx} delay={idx * 100}>
                      <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                            {idx + 1}
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-semibold mb-4">
                              {app.title}
                            </h3>
                            <p>{app.description}</p>
                          </div>
                        </li>
                      </div>
                    </FadeInSection>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
