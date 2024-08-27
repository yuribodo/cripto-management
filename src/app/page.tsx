import Image from "next/image";
import Header from "./_components/Header";
import MyCoins from "./_components/Coins/MyCoins";
import PieChart from "./_components/PieChart";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header/>

      <div className=" bg-slate-100 p-4 ">
        <div  className="flex flex-col bg-slate-300 p-4  rounded-2xl">
          <h1 className=" text-sm">Total Balance</h1>
          <h1 className=" text-xl font-bold">R$: 1231321</h1>
        </div>  
      </div>

      <PieChart/>
      <MyCoins/>
    </div>
  );
}
