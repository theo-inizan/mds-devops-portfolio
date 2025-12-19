"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Container,
  GitBranch,
  Server,
  Layers,
} from "lucide-react";

const technologies = [
  {
    name: "Python",
    icon: Code2,
    color: "text-blue-400",
    description: "Scraping & Automation",
  },
  {
    name: "React",
    icon: Layers,
    color: "text-cyan-400",
    description: "Frontend Development",
  },
  {
    name: "Next.js",
    icon: Code2,
    color: "text-foreground",
    description: "Full Stack Framework",
  },
  {
    name: "Node.js",
    icon: Server,
    color: "text-green-400",
    description: "Backend Runtime",
  },
  {
    name: "Express",
    icon: Server,
    color: "text-gray-400",
    description: "Web Framework",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    color: "text-blue-500",
    description: "Relational Database",
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "text-green-500",
    description: "NoSQL Database",
  },
  {
    name: "Docker",
    icon: Container,
    color: "text-blue-400",
    description: "Containerization",
  },
  {
    name: "Git",
    icon: GitBranch,
    color: "text-orange-500",
    description: "Version Control",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function TechStack() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Stack Technique
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions performantes
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-card rounded-xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-glow/0 group-hover:from-accent/5 group-hover:to-glow/5 transition-all duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-background rounded-lg ${tech.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs text-secondary font-mono">
                      #{String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                    {tech.name}
                  </h3>
                  
                  <p className="text-sm text-secondary">
                    {tech.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-glow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional skills note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-secondary">
            Et bien d'autres technologies selon les besoins du projet...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
