import React, { useState, useEffect } from "react";
import { ArrowLeft, ChevronRight, MapPin, Building } from "lucide-react";
import { useParams } from "react-router-dom";
import { portfolioProjects } from "../portfolio-data/portfolioData";

const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-1000 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
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
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center animate-fadeIn">
          <h2 className="text-2xl font-bold text-gray-900">
            Project Not Found
          </h2>
          <p className="mt-2 text-gray-600">
            The project you're looking for doesn't exist.
          </p>
          <button className="mt-4 inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-all duration-300 hover:scale-105">
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
    <div className="min-h-screen bg-slate-900">
      {/* Sticky Header */}
      {/* <div className={`sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300 ${scrollPosition > 100 ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-all duration-300 hover:-translate-x-1">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </button>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Share Project
              </button>
            </div>
          </div>
        </div>
      </div> */}

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
              <div className="text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm animate-fadeIn">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-5xl font-bold mb-4 animate-slideUp">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-gray-200">
                  <div className="flex items-center transition-all duration-300 hover:text-white">
                    <Building className="w-4 h-4 mr-2" />
                    {project.client}
                  </div>
                  <div className="flex items-center transition-all duration-300 hover:text-white">
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
        <div className="bg-white rounded-xl shadow-sm">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 
                    ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 animate-scaleX" />
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
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 transition-all duration-300 hover:shadow-md hover:border-blue-200">
                    <h2 className="text-xl font-semibold text-blue-900 mb-4">
                      Project Objective
                    </h2>
                    <p className="text-blue-800">{project.objective}</p>
                  </div>
                </FadeInSection>
                <FadeInSection delay={200}>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      Project Link
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Click on the link to navigate to the website -{" "}
                      <a
                        href={project.link}
                        className="text-blue-600 leading-relaxed underline"
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
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      Project Overview
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>
                </FadeInSection>

                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Users,
                      value: "250%",
                      label: "Increase in Social Media Following",
                      color: "blue",
                      delay: 300,
                    },
                    {
                      icon: TrendingUp,
                      value: "180%",
                      label: "Growth in Engagement Rate",
                      color: "green",
                      delay: 400,
                    },
                    {
                      icon: Target,
                      value: "120+",
                      label: "Qualified Leads Generated",
                      color: "red",
                      delay: 500,
                    },
                  ].map((metric, index) => (
                    <FadeInSection key={index} delay={metric.delay}>
                      <div className="group bg-white p-6 rounded-lg border border-gray-200 transition-all duration-500 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1">
                        <metric.icon
                          className={`w-8 h-8 text-${metric.color}-600 mb-4 transition-transform duration-300 group-hover:scale-110`}
                        />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {metric.value}
                        </h3>
                        <p className="text-gray-600">{metric.label}</p>
                      </div>
                    </FadeInSection>
                  ))}
                </div> */}
                <FadeInSection delay={200}>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      Project Outcome
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {project.outcome?.summary}
                    </p>
                  </div>
                </FadeInSection>
              </div>
            )}

            {activeTab === "results" && (
              <div className="space-y-6">
                {project.keyResults.map((result, index) => (
                  <FadeInSection key={index} delay={index * 100}>
                    <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:border-blue-500 hover:shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {result.title}
                      </h3>
                      <ol className="space-y-4">
                        {result.points.map((point, idx) => (
                          <li key={idx} className="flex items-start group">
                            <ChevronRight className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:translate-x-1" />
                            <span className="text-gray-600">{point}</span>
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
                <div className="bg-white rounded-lg">
                  <ol className="space-y-6">
                    {project.approach.map((app, idx) => (
                      <FadeInSection key={idx} delay={idx * 100}>
                        <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:border-blue-500 hover:shadow-md">
                          <li className="flex items-start group">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200">
                              {idx + 1}
                            </div>
                            <div className="ml-4">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                {app.title}
                              </h3>
                              <p className="text-gray-600">{app.description}</p>
                            </div>
                          </li>
                        </div>
                      </FadeInSection>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
