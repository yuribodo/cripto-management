'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ComeBackButton from '../_components/ComeBackButton';

const Check: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const X: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  isPrimary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className, isPrimary }) => (
  <motion.button
    className={`px-6 py-3 rounded-full font-bold text-white transition-colors ${
      isPrimary ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gray-700 hover:bg-gray-600'
    } ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
  isPopular?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, isPopular }) => (
  <motion.div
    className={`bg-gray-800 rounded-2xl overflow-hidden shadow-2xl ${
      isPopular ? 'border-2 border-purple-500' : ''
    } ${className}`}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -10 }}
  >
    {isPopular && (
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 font-semibold">
        Mais Popular
      </div>
    )}
    {children}
  </motion.div>
);

interface PlanFeature {
  name: string;
  price: string;
  features: string[];
  notIncluded?: string[];
}

const Planos: React.FC = () => {
  const plans: PlanFeature[] = [
    {
      name: "Plano Comum",
      price: "Grátis",
      features: [
        "Gerenciamento básico de carteira",
        "Acompanhamento de até 5 criptomoedas",
        "Alertas de preço limitados",
        "Suporte por email",
      ],
      notIncluded: [
        "Análises avançadas de mercado",
        "Integração com exchanges",
        "Suporte prioritário 24/7",
      ],
    },
    {
      name: "Plano Premium",
      price: "R$ 29,99/mês",
      features: [
        "Gerenciamento avançado de carteira",
        "Acompanhamento ilimitado de criptomoedas",
        "Alertas de preço personalizados",
        "Análises avançadas de mercado",
        "Integração com todas as principais exchanges",
        "Suporte prioritário 24/7",
        "Acesso antecipado a novos recursos",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center p-8">
      <ComeBackButton />
      <motion.h1 
        className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Nossos Planos
      </motion.h1>
      <motion.p 
        className="text-xl max-w-2xl text-center mb-16 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Escolha o plano perfeito para suas necessidades de gerenciamento de criptomoedas.
      </motion.p>
      <div className="flex max-md:flex-wrap justify-center gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className="w-full max-w-md" isPopular={index === 1}>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">{plan.name}</h2>
              <p className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <Check />
                    <span className="ml-3">{feature}</span>
                  </motion.li>
                ))}
                {plan.notIncluded && plan.notIncluded.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center text-gray-400"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (plan.features.length + i) * 0.1, duration: 0.3 }}
                  >
                    <X />
                    <span className="ml-3">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <Button isPrimary={index === 1} className="w-full">
                {index === 0 ? 'Começar Grátis' : 'Assinar Agora'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Planos;
