import Image from "next/image";

export default function CoinsCard() {
    return (
        <div className="flex flex-col bg-gray-800 w-[80vw] p-6 rounded-2xl text-white">
            <div className="flex justify-between">
                <div className="flex items-center">
                    <Image
                        src="/bitcoin.png"
                        width={40}
                        height={40}
                        alt="Coin image"
                        className="mr-4"
                    />
                    <h1 className="font-semibold text-xl">Bitcoin</h1>
                </div>
                <div>
                    <h1 className="p-2 font-bold">R$: 300000</h1>
                </div>
            </div>
        </div>
    );
}
