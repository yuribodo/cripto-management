"use client";

import React from 'react';
import {motion} from 'framer-motion'
import { User, Mail, Phone, Calendar, CreditCard, Shield, ChevronRight } from 'lucide-react';

const AccountPage = () => {
  const user = {
    name: 'João Silva',
    email: 'joao.silva@exemplo.com',
    phone: '+55 11 98765-4321',
    joinDate: '15 de março de 2023',
    plan: 'Premium',
    lastPayment: '05 de outubro de 2024',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          variants={itemVariants}
        >
          Sua Conta
        </motion.h1>
        
        <motion.div 
          className="bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border border-gray-700"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center mb-6">
            <motion.div 
              className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold mb-4 md:mb-0 md:mr-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {user.name.charAt(0)}
            </motion.div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold">{user.name}</h2>
              <p className="text-gray-400">Membro desde {user.joinDate}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Mail, label: 'Email', value: user.email },
              { icon: Phone, label: 'Telefone', value: user.phone },
              { icon: Calendar, label: 'Inscrito em', value: user.joinDate },
              { icon: CreditCard, label: 'Último pagamento', value: user.lastPayment },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center p-4 bg-gray-700 rounded-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
              >
                <item.icon className="w-6 h-6 mr-3 text-blue-400" />
                <div>
                  <p className="text-sm text-gray-400">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold mb-4">Detalhes do Plano</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="w-8 h-8 mr-3 text-green-400" />
              <div>
                <p className="text-sm text-gray-400">Seu plano atual</p>
                <p className="text-lg font-medium">{user.plan}</p>
              </div>
            </div>
            <motion.button 
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-6 rounded-full flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Alterar Plano
              <ChevronRight className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AccountPage;