"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddCoin() {
  const [selectedCoin, setSelectedCoin] = useState("");
  const [amount, setAmount] = useState("");
  const router = useRouter();

  const availableCoins = ["Bitcoin", "Ethereum", "Cardano", "Solana"]; 

  const handleAddCoin = () => {
    
    console.log(`Added ${amount} of ${selectedCoin}`);
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-2xl text-white mb-6">Add New Cryptocurrency</h1>
      
      <select
        value={selectedCoin}
        onChange={(e) => setSelectedCoin(e.target.value)}
        className="mb-4 p-2 rounded-lg bg-gray-800 text-white"
      >
        <option value="" disabled>Select a Cryptocurrency</option>
        {availableCoins.map((coin) => (
          <option key={coin} value={coin}>
            {coin}
          </option>
        ))}
      </select>
      
      <input
        type="number"
        placeholder="Amount Purchased"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mb-4 p-2 rounded-lg bg-gray-800 text-white"
      />
      
      <button
        onClick={handleAddCoin}
        className="bg-blue-600 text-white py-2 px-4 rounded-lg"
      >
        Add Coin
      </button>
    </div>
  );
}
