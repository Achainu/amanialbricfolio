import React from 'react';
import { motion } from 'framer-motion';

const Projets = () => {
  const projets = [
    {
      title: 'Site de Gestion des Utilisateurs',
      description:
        'Application web complète en Laravel avec gestion des rôles, authentification et CRUD utilisateurs.',
      techs: ['React', 'Laravel'],
    },
    {
      title: 'API RESTful avec Laravel',
      description:
        'Développement d’une API performante pour gérer des données d’une application web.',
      techs: ['Laravel', 'TailwindCSS'],
    },
    {
      title: 'Portfolio Moderne en React',
      description:
        "Création d'un portfolio moderne et réactif pour présenter mes projets et compétences.",
      techs: ['React.js', 'JavaScript', 'TailwindCSS'],
    },
    {
      title: 'Animation de Personnage 3D',
      description:
        'Modélisation d’une maison moderne avec éclairage réaliste, matériaux PBR et rendu final dans Cycles. Réalisation d’un personnage animé (rigging, skinning, animation de marche) prêt à être exporté vers Unity.',
      techs: ['Blender', 'Unity', '3D Modeling'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <section id="projects">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Projets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projets.map((projet, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">{projet.title}</h3>
              <p className="text-gray-400 mb-4">{projet.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {projet.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Voir le projet →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projets;
