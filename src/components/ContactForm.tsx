"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { send } from '@emailjs/browser';
import { HiCheck, HiX } from 'react-icons/hi';
import { useSound } from '@/hooks/useSound';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  submit?: string;
}

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  },
  success: {
    scale: [1, 1.02, 1],
    borderColor: "rgb(var(--success))",
    transition: { duration: 0.5 }
  },
  error: {
    x: [0, -10, 10, -10, 0],
    borderColor: "rgb(var(--error))",
    transition: { duration: 0.5 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const RATE_LIMIT_TIME = 60000; // 1 minuto em millisegundos
const MAX_ATTEMPTS = 3; // máximo de tentativas por período

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const { playSuccess, playClick } = useSound();
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);
  const [submitCount, setSubmitCount] = useState<number>(0);

  // Recuperar contagem do localStorage ao montar o componente
  useEffect(() => {
    const savedCount = localStorage.getItem('submitCount');
    const savedTime = localStorage.getItem('lastSubmitTime');
    
    if (savedCount && savedTime) {
      const timeDiff = Date.now() - parseInt(savedTime);
      if (timeDiff < RATE_LIMIT_TIME) {
        setSubmitCount(parseInt(savedCount));
        setLastSubmitTime(parseInt(savedTime));
      } else {
        // Reset se passou o tempo limite
        localStorage.removeItem('submitCount');
        localStorage.removeItem('lastSubmitTime');
      }
    }
  }, []);

  const isRateLimited = (): string | false => {
    const now = Date.now();
    const timeDiff = now - lastSubmitTime;

    if (timeDiff < RATE_LIMIT_TIME && submitCount >= MAX_ATTEMPTS) {
      const waitTime = Math.ceil((RATE_LIMIT_TIME - timeDiff) / 1000);
      return `Aguarde ${waitTime} segundos antes de tentar novamente`;
    }

    return false;
  };

  const validate = (values: FormState): FormErrors => {
    const errors: FormErrors = {};

    if (!values.name.trim()) {
      errors.name = 'Nome é obrigatório';
    }

    if (!values.email) {
      errors.email = 'Email é obrigatório';
    } else if (!validateEmail(values.email)) {
      errors.email = 'Email inválido';
    }

    if (!values.message.trim()) {
      errors.message = 'Mensagem é obrigatória';
    }

    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Validação em tempo real
    const validationErrors = validate({
      ...formState,
      [name]: value
    });
    setErrors(validationErrors);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const rateLimitMessage = isRateLimited();
    if (rateLimitMessage) {
      setErrors(prev => ({ ...prev, submit: rateLimitMessage }));
      return;
    }

    const validationErrors = validate(formState);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus('loading');

    try {
      await send(
        'service_wv3ad09',
        'template_m527ex7',
        {
          from_name: formState.name,
          reply_to: formState.email,
          message: formState.message
        },
        '-GxWH_eydkdXRUw6S'     // Sua Public Key
      );

      // Atualizar contagem de submissões
      const newCount = submitCount + 1;
      setSubmitCount(newCount);
      setLastSubmitTime(Date.now());
      
      // Salvar no localStorage
      localStorage.setItem('submitCount', newCount.toString());
      localStorage.setItem('lastSubmitTime', Date.now().toString());

      setStatus('success');
      playSuccess();
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-md mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={formVariants}
      >
        <motion.div
          variants={itemVariants}
          className="group relative"
        >
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            value={formState.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-300
                     bg-[rgb(var(--card-background))]
                     ${errors.name && touched.name 
                       ? 'border-red-500 focus:ring-red-500' 
                       : 'border-[rgb(var(--foreground))/10 focus:ring-[rgb(var(--primary))]'
                     }`}
          />
          {touched.name && errors.name && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm absolute -bottom-6 left-0"
            >
              {errors.name}
            </motion.span>
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="group relative"
        >
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            value={formState.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-300
                     bg-[rgb(var(--card-background))]
                     ${errors.email && touched.email
                       ? 'border-red-500 focus:ring-red-500'
                       : 'border-[rgb(var(--foreground))/10 focus:ring-[rgb(var(--primary))]'
                     }`}
          />
          {touched.email && errors.email && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm absolute -bottom-6 left-0"
            >
              {errors.email}
            </motion.span>
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="group relative"
        >
          <textarea
            name="message"
            placeholder="Sua mensagem"
            rows={4}
            value={formState.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-4 py-3 rounded-lg border transition-all duration-300
                     bg-[rgb(var(--card-background))]
                     ${errors.message && touched.message
                       ? 'border-red-500 focus:ring-red-500'
                       : 'border-[rgb(var(--foreground))/10 focus:ring-[rgb(var(--primary))]'
                     }`}
          />
          {touched.message && errors.message && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm absolute -bottom-6 left-0"
            >
              {errors.message}
            </motion.span>
          )}
        </motion.div>

        {errors.submit && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-sm text-center"
          >
            {errors.submit}
          </motion.p>
        )}

        <motion.button
          variants={itemVariants}
          type="submit"
          disabled={status === 'loading' || Boolean(isRateLimited())}
          className={`w-full px-6 py-3 rounded-lg transition-colors relative
                   ${status === 'loading'
                     ? 'bg-[rgb(var(--primary))]/50'
                     : 'bg-[rgb(var(--primary))] hover:bg-[rgb(var(--accent))]'
                   } text-[rgb(var(--primary-foreground))]`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {status === 'loading' ? (
            <motion.div
              className="h-5 w-5 border-2 border-white border-t-transparent rounded-full mx-auto"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          ) : (
            'Enviar mensagem'
          )}
        </motion.button>
      </motion.form>

      {/* Feedback Toast */}
      <AnimatePresence>
        {(status === 'success' || status === 'error') && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg flex items-center gap-2
                     ${status === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`}
          >
            {status === 'success' ? (
              <>
                <HiCheck className="text-xl" />
                <span>Mensagem enviada com sucesso!</span>
              </>
            ) : (
              <>
                <HiX className="text-xl" />
                <span>Erro ao enviar mensagem. Tente novamente.</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 