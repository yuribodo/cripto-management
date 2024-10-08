import React from 'react';
import { User, Mail, Phone, Calendar, CreditCard, Shield } from 'lucide-react';

const AccountPage = () => {
  // Dados simulados do usuário
  const user = {
    name: 'João Silva',
    email: 'joao.silva@exemplo.com',
    phone: '+55 11 98765-4321',
    joinDate: '15 de março de 2023',
    plan: 'Premium',
    lastPayment: '05 de outubro de 2024',
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Sua Conta</h1>
        
        <div className="bg-gray-700 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-3xl font-bold mr-6">
              {user.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-gray-400">Membro desde {user.joinDate}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <Mail className="w-6 h-6 mr-3 text-blue-400" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 mr-3 text-blue-400" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-blue-400" />
              <span>Inscrito em {user.joinDate}</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="w-6 h-6 mr-3 text-blue-400" />
              <span>Último pagamento: {user.lastPayment}</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-700 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Detalhes do Plano</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="w-6 h-6 mr-3 text-green-400" />
              <span>Plano {user.plan}</span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Alterar Plano
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;