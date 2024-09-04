"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function AddCoin() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  
  const router = useRouter(); 

  const handleAddCoin = () => {
    
    console.log("Nome da Cripto:", name);
    console.log("Valor:", value);
    
    
    router.push("/my-coins"); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-2xl text-white mb-6">Add New Cryptocurrency</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4 p-2 rounded-lg bg-gray-800 text-white"
      />
      <input
        type="text"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
