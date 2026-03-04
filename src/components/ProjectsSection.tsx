import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    description: "A comprehensive system to manage student records with CRUD operations, search, and sorting capabilities.",
    tech: ["Java", "MySQL", "JDBC"],
    category: "Java",
    github: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and featuring glassmorphism design elements.",
    tech: ["React", "TypeScript", "Tailwind"],
    category: "Web",
    github: "https://github.com",
    live: "#",
  },
  {
    title: "E-Commerce Backend",
    description: "RESTful API for an e-commerce platform with authentication, product management, and order processing.",
    tech: ["Java", "Spring Boot", "MySQL"],
    category: "Full Stack",
    github: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with location search, forecast display, and interactive charts.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    github: "https://github.com",
    live: "#",
  },
];

const filters = ["All", "Java", "Web", "Full Stack"];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 relative particle-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">
            What I've built
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">Projects</h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === f
                  ? "bg-primary text-primary-foreground glow-blue"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 group hover:glow-blue transition-all duration-500"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={14} /> Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
