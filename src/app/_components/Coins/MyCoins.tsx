"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Importa do next/navigation para o App Router
import CoinsCard from "./CoinsCard";
import Modal from "./CoinModal";

interface Coin {
  imageSrc: string;
  name: string;
  value: string;
}

const coinsData: Coin[] = [
  { imageSrc: "/bitcoin.png", name: "Bitcoin", value: "300000" },
  { imageSrc: "/ethereum.png", name: "Ethereum", value: "150000" },
  { imageSrc: "/ripple.png", name: "Ripple", value: "50000" },
];

export default function MyCoins() {
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);
  const router = useRouter(); // Corrigido com o hook correto do App Router

  const handleCardClick = (coin: Coin) => {
    setSelectedCoin(coin);
  };

  const handleCloseModal = () => {
    setSelectedCoin(null);
  };

  const handleAddCoinClick = () => {
    router.push("/add-coin"); // Redireciona para a nova página de adicionar cripto
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
