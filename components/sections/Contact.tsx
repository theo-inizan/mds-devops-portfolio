"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/theo-dev",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/theo-dev",
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:theo.dev@example.com",
    color: "hover:text-accent",
  },
];

export default function Contact() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Travaillons Ensemble
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Je suis ouvert aux opportunités freelance et CDI. N'hésitez pas à me contacter !
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-accent/20 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-accent/10 via-glow/10 to-accent/10 p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-accent"
            >
              <Mail className="w-10 h-10 text-accent" />
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Contactez-moi
            </h3>
            <p className="text-secondary">
              Réponse garantie sous 24h
            </p>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Email CTA */}
            <motion.a
              href="mailto:theo.dev@example.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-accent hover:bg-glow text-background font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-glow/40 group"
            >
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>theo.dev@example.com</span>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 text-secondary"
            >
              <MapPin className="w-4 h-4" />
              <span>Tours, France</span>
              <span className="text-accent">•</span>
              <span>Disponible pour remote/hybride</span>
            </motion.div>

            {/* Divider */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-accent/20"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-card text-sm text-secondary">
                  Ou retrouvez-moi sur
                </span>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center gap-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group p-4 bg-background hover:bg-accent/10 rounded-xl border border-accent/30 hover:border-accent transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Additional info */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="text-center text-sm text-secondary pt-4"
            >
              Vous pouvez également télécharger mon{" "}
              <a
                href="mailto:theo.dev@example.com?subject=Demande%20de%20CV"
                className="text-accent hover:text-glow underline transition-colors"
              >
                CV complet
              </a>
            </motion.p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-secondary text-sm"
        >
          <p>
            © {new Date().getFullYear()} Théo. Développé avec{" "}
            <span className="text-accent">Next.js</span>,{" "}
            <span className="text-accent">React</span> et{" "}
            <span className="text-accent">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
