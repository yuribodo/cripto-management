'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ComeBackButton() {
  const router = useRouter();

  const handleBack = () => {
    
    if (window.history.length > 1) {
      window.history.back();
    } else {
      
      router.push('/');
    }
  };

  return (
    <button
        onClick={handleBack} 
        className="group absolute left-8 top-8 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-gray-800/50 active:scale-95"
        aria-label="Voltar"
      >
        <ArrowLeft 
          className="h-5 w-5 transform text-gray-300 transition-all duration-300 ease-out group-hover:-translate-x-0.5" 
        />
        <span className="absolute inset-0 rounded-full bg-gray-700 opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
      </button>
  );
}

