"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-glow/5 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-accent/20 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-glow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-glow"></span>
            </span>
            <span className="text-sm text-secondary">Disponible pour de nouvelles opportunités</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-glow bg-clip-text text-transparent"
          >
            Théo
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 text-foreground/90"
          >
            Développeur Full Stack
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            3 ans d'expérience en alternance chez{" "}
            <span className="text-accent font-semibold">Déco & Compagnie</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg text-secondary/80 max-w-2xl mx-auto mb-12"
          >
            Spécialisé dans le scraping de données avec Python et le développement
            d'applications web modernes avec React et Next.js
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="mailto:theo.dev@example.com"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-glow text-background font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-glow/40 hover:scale-105"
            >
              Me contacter
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:theo.dev@example.com?subject=Demande%20de%20CV"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-card hover:bg-card/80 text-foreground font-semibold rounded-lg border border-accent/30 hover:border-accent transition-all duration-300"
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Télécharger mon CV
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-accent rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
