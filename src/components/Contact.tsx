"use client";

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Contato</h2>
      <div className="flex justify-center gap-6">
        <motion.a
          href="https://www.linkedin.com/in/davi-bassani-2264a01b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--primary))] hover:text-[rgb(var(--accent))] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin size={30} />
        </motion.a>
        <motion.a
          href="https://github.com/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[rgb(var(--primary))] hover:text-[rgb(var(--accent))] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub size={30} />
        </motion.a>
      </div>
    </section>
  );
} 