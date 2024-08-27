import CoinsCard from "./CoinsCard";

export default function MyCoins() {
    return (
        <div className="flex flex-col bg-gray-900 min-h-screen">
            <h1 className="font-bold p-6 text-xl text-white">My Coins:</h1>
            <div className="flex flex-col justify-center items-center space-y-6">
                <CoinsCard />
                <CoinsCard />
                <CoinsCard />
            </div>
        </div>
    );
}
