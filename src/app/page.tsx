import Image from "next/image";
import Header from "./_components/Header";
import MyCoins from "./_components/Coins/MyCoins";
import PieChart from "./_components/PieChart";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Header />

      <div className="p-6">
        <div className="flex flex-col bg-gray-800 p-6 rounded-2xl shadow-md">
          <h1 className="text-sm text-gray-400">Total Balance</h1>
          <h1 className="text-2xl font-bold text-white">R$: 1,231,321</h1>
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
