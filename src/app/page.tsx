"use client";

import { motion } from "framer-motion";
import Header from "./_components/Header";
import MyCoins from "./_components/Coins/MyCoins";
import PieChart from "./_components/PieChart";

export default function Home() {
  const totalBalance = 1231321;
  const change = 50000; 
  const isGain = change > 0;
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
              <motion.h1 
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                R$: {totalBalance.toLocaleString()}
              </motion.h1>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-2xl font-bold ${changeColor}`}>
                {changeSymbol}{Math.abs(change).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-6">
        <PieChart />
      </div>

      <div className="flex-1 p-6 bg-gray-900 rounded-t-2xl">
        <MyCoins />
      </div>
    </div>
  );
}
