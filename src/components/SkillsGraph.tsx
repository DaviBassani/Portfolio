"use client";

import React, { JSX } from 'react';
import { motion, useScroll } from 'framer-motion';
import { 
  SiReact, SiJavascript, SiHtml5, SiDotnet,
  SiFlutter, SiDart, SiOpenjdk,
  SiPython, SiScikitlearn, SiTensorflow,
  SiGit, SiJira
} from 'react-icons/si';
import { FaGamepad } from 'react-icons/fa';
import Tooltip from './ui/Tooltip';
import { useSound } from '@/hooks/useSound';
import AnimatedIcon from './ui/AnimatedIcon';

const skillCategories = [
  {
    category: "Desenvolvimento Web",
    skills: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 80 },
      { name: '.NET', level: 75 },
      { name: 'C#', level: 75 },
    ]
  },
  {
    category: "Desenvolvimento Mobile",
    skills: [
      { name: 'Flutter', level: 80 },
      { name: 'Dart', level: 75 },
      { name: 'Java', level: 50 },
    ]
  },
  {
    category: "Data Science & IA",
    skills: [
      { name: 'Python', level: 90 },
      { name: 'RPA', level: 85 },
      { name: 'Data Science', level: 75 },
      { name: 'Machine Learning', level: 70 },
    ]
  },
  {
    category: "Outros",
    skills: [
      { name: 'Game Design', level: 75 },
      { name: 'Git', level: 85 },
      { name: 'Scrum/Agile', level: 80 },
    ]
  }
];

const skillIcons: Record<string, JSX.Element> = {
  'React': <SiReact />,
  'JavaScript': <SiJavascript />,
  'HTML/CSS': <SiHtml5 />,
  '.NET': <SiDotnet />, 
  'C#': <SiDotnet />,
  'Flutter': <SiFlutter />,
  'Dart': <SiDart />,
  'Java': <SiOpenjdk />,
  'Python': <SiPython />,
  'Machine Learning': <SiTensorflow />,
  'Data Science': <SiScikitlearn />,
  'Git': <SiGit />,
  'Scrum/Agile': <SiJira />,
  'Game Design': <FaGamepad />
};

const skillDescriptions: Record<string, string> = {
  'React': 'Biblioteca JavaScript para construção de interfaces',
  'JavaScript': 'Linguagem de programação versátil e dinâmica',
  'HTML/CSS': 'Fundamentos da web e estilização',
  '.NET': 'Framework para desenvolvimento de aplicações',
  'C#': 'Linguagem orientada a objetos da Microsoft',
  'Flutter': 'Framework para desenvolvimento mobile multiplataforma',
  'Dart': 'Linguagem moderna otimizada para UI',
  'Java': 'Linguagem robusta e multiplataforma',
  'Python': 'Linguagem versátil para diversos propósitos',
  'Machine Learning': 'Aprendizado de máquina e IA',
  'Data Science': 'Análise e visualização de dados',
  'Git': 'Sistema de controle de versão',
  'Scrum/Agile': 'Metodologias ágeis de desenvolvimento',
  'Game Design': 'Design e desenvolvimento de jogos'
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export default function SkillsGraph() {
  const { scrollYProgress } = useScroll();
  const { playHover } = useSound();

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      role="region" 
      aria-label="Minhas habilidades"
    >
      {skillCategories.map((category) => (
        <motion.div
          key={category.category}
          variants={categoryVariants}
          className="bg-[rgb(var(--card-background))] p-6 rounded-xl shadow-lg
                   border border-[rgb(var(--foreground))/10"
          role="group"
          aria-labelledby={`category-${category.category}`}
        >
          <h3 
            id={`category-${category.category}`}
            className="text-xl font-bold mb-4 bg-gradient-to-r from-[rgb(var(--primary))] 
                    to-[rgb(var(--secondary))] bg-clip-text text-transparent"
          >
            {category.category}
          </h3>
          <div className="grid gap-4">
            {category.skills.map((skill, index) => (
              <div 
                key={skill.name}
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Nível de ${skill.name}`}
              >
                <div className="flex justify-between mb-1 items-center">
                  <div className="flex items-center gap-2">
                    <Tooltip text={skillDescriptions[skill.name]}>
                      <span className="text-[rgb(var(--primary))]">
                        <AnimatedIcon icon={skillIcons[skill.name] || null} />
                      </span>
                    </Tooltip>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-[rgb(var(--primary))]">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[rgb(var(--foreground))/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[rgb(var(--primary))] 
                             to-[rgb(var(--secondary))] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 1.2,
                      delay: index * 0.15,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
} 