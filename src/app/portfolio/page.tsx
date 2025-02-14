"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Portfolio Pessoal',
    description: 'Site pessoal desenvolvido com Next.js 14, React e TypeScript. Inclui animações suaves, modo escuro, gestos touch para mobile e diversas micro-interações para melhor experiência do usuário.',
    tech: [
      'Next.js 14',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'React Icons'
    ],
    image: '/portfolio.png',
    demoUrl: '/',
    githubUrl: 'https://github.com/seu-usuario/seu-portfolio',
    features: [
      'Design Responsivo',
      'Modo Escuro/Claro',
      'Animações Suaves',
      'Gestos Touch',
      'Micro-interações',
      'Acessibilidade'
    ]
  },
  {
    id: 2,
    title: 'Projeto 2',
    description: 'Descrição detalhada do projeto 2',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: '/next.svg',
    demoUrl: '#',
    githubUrl: '#',
  },
  // Adicione mais projetos aqui
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
          Meus Projetos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                {/* Features do projeto */}
                {project.features && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Funcionalidades:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tecnologias usadas */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 rounded-full text-sm
                               bg-blue-100 dark:bg-blue-900/40 
                               text-blue-600 dark:text-blue-300
                               hover:bg-blue-200 dark:hover:bg-blue-800
                               transition-all duration-300 ease-in-out
                               cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.demoUrl}
                    className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                  >
                    Demo <span>→</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                  >
                    GitHub <span>→</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
} 