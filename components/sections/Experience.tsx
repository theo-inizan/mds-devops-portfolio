"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    period: "2022 - 2025",
    duration: "3 ans",
    role: "Développeur Full Stack",
    company: "Déco & Compagnie",
    location: "Tours, France",
    type: "Alternance",
    achievements: [
      "Développement de scripts de scraping Python pour automatiser la récupération de données produits sur divers sites e-commerce",
      "Traitement et normalisation de milliers de fiches produits (descriptions, prix, images, caractéristiques techniques)",
      "Intégration des données dans le système de gestion de contenu du site e-commerce",
      "Création d'interfaces React pour la visualisation et la validation des données scrappées",
      "Mise en place de pipelines de données automatisés avec planification de tâches",
      "Optimisation des performances et gestion des erreurs pour garantir la fiabilité du scraping",
    ],
    technologies: ["Python", "BeautifulSoup", "Scrapy", "React", "PostgreSQL", "REST API"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Experience() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Expérience Professionnelle
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Mon parcours et les projets concrets que j'ai réalisés
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Card */}
              <div className="bg-card rounded-2xl border border-accent/20 overflow-hidden hover:border-accent/40 transition-all duration-300 group">
                {/* Header */}
                <div className="bg-gradient-to-r from-accent/10 to-glow/10 p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-accent font-semibold mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                        <span className="px-2 py-1 bg-accent/20 rounded text-xs">
                          {exp.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-accent font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-secondary">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="px-3 py-1 bg-background rounded-full text-sm font-medium text-accent border border-accent/30">
                        {exp.type}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-accent" />
                      Réalisations clés
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3 text-secondary group/item hover:text-foreground transition-colors"
                        >
                          <ChevronRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">
                      Technologies utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1.5 bg-background border border-accent/30 rounded-lg text-sm font-medium text-accent hover:bg-accent/10 transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Accent line */}
                <div className="h-1 bg-gradient-to-r from-accent via-glow to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
