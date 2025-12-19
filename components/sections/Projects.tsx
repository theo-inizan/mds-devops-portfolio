"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone, Globe, Database } from "lucide-react";

const projects = [
  {
    title: "Système de Scraping E-commerce",
    category: "Professionnel",
    description: "Architecture complète de scraping pour récupérer et normaliser des milliers de produits depuis diverses sources. Automatisation des flux de données avec gestion d'erreurs robuste.",
    technologies: ["Python", "Scrapy", "PostgreSQL", "Docker", "Redis"],
    icon: Database,
    gradient: "from-blue-500 to-cyan-500",
    highlights: ["10k+ produits/jour", "Taux de succès 98%", "API REST"],
  },
  {
    title: "Application Mobile Étudiante",
    category: "Projet Étudiant",
    description: "Application mobile cross-platform développée dans le cadre d'un projet académique. Interface intuitive et moderne avec gestion d'état optimisée.",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500",
    highlights: ["iOS & Android", "Temps réel", "Offline-first"],
  },
  {
    title: "Web App de Gestion",
    category: "Projet Étudiant",
    description: "Application web full-stack pour la gestion de projets collaboratifs. Authentification sécurisée, dashboard interactif et API RESTful.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind"],
    icon: Globe,
    gradient: "from-green-500 to-emerald-500",
    highlights: ["Auth JWT", "Real-time updates", "Responsive"],
  },
  {
    title: "Dashboard Analytics",
    category: "Side Project",
    description: "Tableau de bord pour visualiser les données de scraping en temps réel. Graphiques interactifs et monitoring des performances.",
    technologies: ["React", "Chart.js", "Express", "PostgreSQL"],
    icon: Database,
    gradient: "from-orange-500 to-red-500",
    highlights: ["Temps réel", "Graphiques avancés", "Export CSV"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Projects() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-accent/5 blur-3xl rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Projets Réalisés
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Une sélection de projets professionnels et académiques démontrant mes compétences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative bg-card rounded-2xl border border-accent/20 overflow-hidden hover:border-accent/40 transition-all duration-300"
              >
                {/* Header with gradient */}
                <div className={`relative p-6 bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-background/90 backdrop-blur-sm rounded-xl">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-accent">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-background/70 backdrop-blur-sm rounded text-xs text-secondary"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-secondary mb-3 uppercase tracking-wide">
                      Stack Technique
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-background border border-accent/30 rounded-lg text-sm text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons (placeholders) */}
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-colors group/btn">
                      <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      <span className="font-medium">Voir plus</span>
                    </button>
                    <button className="p-2 bg-background hover:bg-accent/10 text-accent rounded-lg border border-accent/30 transition-colors group/btn">
                      <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-glow/0 group-hover:from-accent/5 group-hover:to-glow/5 transition-all duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-secondary">
            Plus de projets disponibles sur demande ou consultez mon{" "}
            <a href="https://github.com" className="text-accent hover:text-glow underline transition-colors">
              GitHub
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
