"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import CoinsCard from "./CoinsCard";
import Modal from "./CoinModal"; // Certifique-se de que o nome do componente está correto

interface Coin {
  imageSrc: string;
  name: string;
  value: string;
}

const coinsData: Coin[] = [
  { imageSrc: "/bitcoin.png", name: "Bitcoin", value: "300000" },
  { imageSrc: "/ethereum.png", name: "Ethereum", value: "150000" },
  { imageSrc: "/ripple.png", name: "Ripple", value: "50000" },
  // Adicione mais moedas conforme necessário
];

export default function MyCoins() {
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);

  const handleCardClick = (coin: Coin) => {
    setSelectedCoin(coin);
  };

  const handleCloseModal = () => {
    setSelectedCoin(null);
  };

  return (
    <div className="flex flex-col bg-gray-900 min-h-screen">
      <h1 className="font-bold p-6 text-xl text-white">My Coins:</h1>
      <div className="flex flex-col justify-center items-center space-y-6">
        {coinsData.map((coin, index) => (
          <motion.div
            key={index}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
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
