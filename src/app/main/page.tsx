"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../_components/Header/Header";
import MyCoins from "../_components/Coins/MyCoins";
import PieChart from "../_components/PieChart";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); 
  const [totalBalance, setTotalBalance] = useState<number | null>(null); 
  const [change, setChange] = useState<number | null>(null); 

  
  useEffect(() => {
    const fetchData = async () => {
      
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      setTotalBalance(1231321); 
      setChange(50000); 
      setIsLoading(false); 
    };

    fetchData();
  }, []);

  const isGain = (change ?? 0) > 0; 
  const changeColor = isGain ? "text-green-500" : "text-red-500";
  const changeSymbol = isGain ? "+" : "-";

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      <div className="p-6">
        <div className="flex flex-col bg-gray-800 p-6 rounded-2xl shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-sm text-gray-400">Total Balance</h1>
              {isLoading ? (
                
                <div className="h-8 w-32 bg-gray-700 animate-pulse rounded-md"></div>
              ) : (
                <motion.h1
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  R$: {totalBalance?.toLocaleString()}
                </motion.h1>
              )}
            </div>
            <div className="flex items-center gap-2">
              {isLoading ? (
                
                <div className="h-8 w-20 bg-gray-700 animate-pulse rounded-md"></div>
              ) : (
                <span className={`text-2xl font-bold ${changeColor}`}>
                  {changeSymbol}{Math.abs(change ?? 0).toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-6">
        {isLoading ? (
          
          <div className="h-64 w-64 bg-gray-700 animate-pulse rounded-full"></div>
        ) : (
          <PieChart />
        )}
      </div>

      <div className="flex-1 p-6 bg-gray-900 rounded-t-2xl">
        <MyCoins />
      </div>
    </div>
  );
}
