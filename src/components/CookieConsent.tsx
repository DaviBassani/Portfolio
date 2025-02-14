"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verifica se já existe consentimento
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[rgb(var(--card-background))] 
                   border-t border-[rgb(var(--foreground))/10 shadow-lg"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm">
                <p className="mb-2">
                  Este site utiliza cookies para melhorar sua experiência. De acordo com a LGPD (Lei Geral de Proteção de Dados),
                  precisamos do seu consentimento para coletar:
                </p>
                <ul className="list-disc list-inside mb-2 text-[rgb(var(--foreground))/80">
                  <li>Cookies essenciais para o funcionamento do site</li>
                  <li>Preferências de tema e configurações</li>
                  <li>Dados anônimos de análise de uso</li>
                </ul>
                <p className="text-[rgb(var(--foreground))/80">
                  Para saber mais, consulte nossa{' '}
                  <a 
                    href="/politica-privacidade" 
                    className="text-[rgb(var(--primary))] hover:text-[rgb(var(--accent))] 
                             underline transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </p>
              </div>
              <div className="flex gap-3">
                <motion.button
                  onClick={handleReject}
                  className="px-4 py-2 rounded-lg border border-[rgb(var(--foreground))/10
                           hover:bg-[rgb(var(--foreground))/5 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Rejeitar
                </motion.button>
                <motion.button
                  onClick={handleAccept}
                  className="px-4 py-2 rounded-lg bg-[rgb(var(--primary))] 
                           text-[rgb(var(--primary-foreground))]
                           hover:bg-[rgb(var(--accent))] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Aceitar
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 