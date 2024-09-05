"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; 
import CoinsCard from "./CoinsCard";
import Modal from "./CoinModal";
import axios from 'axios';

interface Coin {
  imageSrc: string;
  name: string;
  value: string;
}

export default function MyCoins() {
  const [coinsData, setCoinsData] = useState<Coin[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);
  const router = useRouter();

  // Função para buscar dados da API customizada
  const fetchCryptoData = async () => {
    try {
      const response = await axios.get('/api/crypto'); // Faz a requisição para a rota de API do Next.js
      const data = response.data.data;

      // Atualizando os dados das criptomoedas
      setCoinsData([
        { imageSrc: "/bitcoin.png", name: "Bitcoin", value: data.BTC.quote.USD.price.toFixed(2) },
        { imageSrc: "/ethereum.png", name: "Ethereum", value: data.ETH.quote.USD.price.toFixed(2) },
        { imageSrc: "/cardano.png", name: "Cardano", value: data.ADA.quote.USD.price.toFixed(2) },
        { imageSrc: "/solana.png", name: "Solana", value: data.SOL.quote.USD.price.toFixed(2) },
      ]);
    } catch (error) {
      console.error('Erro ao buscar dados de criptomoedas:', error);
    }
  };

  useEffect(() => {
    fetchCryptoData(); // Chama a função ao montar o componente
  }, []);

  const handleCardClick = (coin: Coin) => {
    setSelectedCoin(coin);
  };

  const handleCloseModal = () => {
    setSelectedCoin(null);
  };

  const handleAddCoinClick = () => {
    router.push("/add-coin"); 
  };

  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center p-6">
        <h1 className="font-bold text-xl text-white">My Coins:</h1>
        <button
          onClick={handleAddCoinClick}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Add Crypto
        </button>
      </div>

      <div className="flex flex-col justify-center items-center space-y-6">
        {coinsData.map((coin, index) => (
          <motion.div
            key={index}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <CoinsCard
              imageSrc={coin.imageSrc}
              name={coin.name}
              value={coin.value}
              onClick={() => handleCardClick(coin)}
            />
          </motion.div>
        ))}
      </div>
      {selectedCoin && (
        <Modal
          isOpen={!!selectedCoin}
          onClose={handleCloseModal}
          coinName={selectedCoin.name}
          coinValue={selectedCoin.value}
          coinImage={selectedCoin.imageSrc}
        />
      )}
    </div>
  );
}
