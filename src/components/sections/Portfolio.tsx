

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "AI Analytics Dashboard",
    category: "AI Solutions",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Digital Marketing Campaign",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070"
  }
];

export const Portfolio = () => (
  <section className="py-20 px-6" id="portfolio">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 neon-text">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-cyan-400">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);