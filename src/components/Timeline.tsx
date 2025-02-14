"use client";

import { motion } from 'framer-motion';
import { useSound } from '@/hooks/useSound';

const experiences = [
  {
    year: '2023',
    title: 'Desenvolvedor Full Stack',
    company: '🏢',
    description: 'Desenvolvimento de aplicações empresariais com React, .NET, C# e tecnologias web modernas.',
    skills: ['React', 'JavaScript', '.NET', 'C#', 'HTML', 'CSS']
  },
  {
    year: '2021-2022',
    title: 'Desenvolvedor Mobile',
    company: 'Projetos Independentes',
    description: 'Criação de aplicativos móveis com Flutter e Java, focando em experiências de usuário intuitivas.',
    skills: ['Flutter', 'Dart', 'Java', 'Mobile Development']
  },
  {
    year: '2020',
    title: 'Desenvolvedor Python & IA',
    company: 'Projetos Pessoais',
    description: 'Desenvolvimento de soluções de RPA, chatbots e projetos de Data Science. Primeiros passos com IA.',
    skills: ['Python', 'RPA', 'Data Science', 'Chatbots', 'IA']
  },
  {
    year: '2018-2019',
    title: 'Iniciando com Python',
    company: 'Estudos & Projetos',
    description: 'Início da jornada em programação com Python, desenvolvendo primeiros scripts e automatizações.',
    skills: ['Python', 'Automação']
  },
  {
    year: '2017',
    title: 'Game Designer',
    company: 'Projetos Pessoais',
    description: 'Início da jornada tech com desenvolvimento de jogos, aprendendo lógica e design de games.',
    skills: ['Game Design', 'Lógica de Programação']
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6
    }
  },
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const dotVariants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  hover: {
    scale: 1.3,
    backgroundColor: "rgb(var(--secondary))",
    boxShadow: "0 0 20px rgb(var(--secondary))",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const yearVariants = {
  hover: {
    scale: 1.1,
    color: "rgb(var(--secondary))",
    transition: {
      duration: 0.2
    }
  }
};

const skillBadgeVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    backgroundColor: "rgb(var(--primary))",
    color: "rgb(var(--background))",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
      backgroundColor: {
        duration: 0.2
      },
      color: {
        duration: 0.2
      }
    }
  }
};

export default function Timeline() {
  const { playHover, playClick } = useSound();

  return (
    <div 
      className="relative max-w-5xl mx-auto px-4"
      role="region"
      aria-label="Linha do tempo profissional"
    >
      {/* Container da linha com largura fixa */}
      <div className="absolute left-1/2 w-[2px] h-full">
        <motion.div 
          className="w-full h-full bg-[rgb(var(--primary))]/20"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1 }}
        />
      </div>

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className={`relative flex items-center mb-12 ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          role="article"
          aria-label={`Experiência em ${exp.title} - ${exp.year}`}
        >
          {/* Conteúdo */}
          <motion.div 
            className="w-[45%]"
            whileHover="hover"
            variants={cardVariants}
            onHoverStart={() => playHover()}
            onClick={() => playClick()}
          >
            <div className="bg-[rgb(var(--card-background))] p-6 rounded-lg shadow-lg
                         border border-[rgb(var(--foreground))/10 transition-all duration-200">
              <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
              <p className="text-[rgb(var(--foreground))/80 mb-1">{exp.company}</p>
              <p className="text-sm text-[rgb(var(--foreground))/60">{exp.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="text-xs px-2 py-1 rounded-full
                             bg-[rgb(var(--primary))]/10 text-[rgb(var(--primary))]
                             cursor-pointer"
                    variants={skillBadgeVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => playHover()}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Ponto central */}
          <div className="absolute left-1/2 w-0 h-0 flex items-center justify-center">
            <motion.div
              className="w-4 h-4 bg-[rgb(var(--primary))] rounded-full z-10"
              variants={dotVariants}
              initial="initial"
              animate="pulse"
              whileHover="hover"
            />
          </div>

          {/* Ano */}
          <div className={`w-[45%] text-center`}>
            <motion.span 
              className="text-[rgb(var(--primary))] font-bold cursor-pointer"
              variants={yearVariants}
              whileHover="hover"
            >
              {exp.year}
            </motion.span>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 