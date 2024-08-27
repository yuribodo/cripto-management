"use client";

import React, { useState } from "react";
import CoinsCard from "./CoinsCard";
import Modal from "./CoinModal"; // Make sure the component name matches

interface Coin {
  imageSrc: string;
  name: string;
  value: string;
}

const coinsData: Coin[] = [
    { imageSrc: "/bitcoin.png", name: "Bitcoin", value: "300000" },
    { imageSrc: "/ethereum.png", name: "Ethereum", value: "150000" },
    { imageSrc: "/ripple.png", name: "Ripple", value: "50000" },
    // Add more coins as needed
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
                    <CoinsCard
                        key={index}
                        imageSrc={coin.imageSrc}
                        name={coin.name}
                        value={coin.value}
                        onClick={() => handleCardClick(coin)}
                    />
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
