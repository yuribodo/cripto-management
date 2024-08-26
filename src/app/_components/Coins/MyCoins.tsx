import CoinsCard from "./CoinsCard";

export default function MyCoins() {
    return (
        <div className="flex flex-col bg-slate-500">
            <h1 className=" font-bold">My Coins:</h1>
            <CoinsCard/>
        </div>
    );
}