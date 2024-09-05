import Image from "next/image";

interface CoinsCardProps {
  imageSrc: string;
  name: string;
  value: string; // Valor da moeda em R$
  amount: number; // Quantidade que o usuário possui
  onClick: () => void;
}

export default function CoinsCard({ imageSrc, name, value, amount, onClick }: CoinsCardProps) {
    // Calculando o valor total baseado na quantidade e no valor da moeda
    const totalValue = (parseFloat(value) * amount).toFixed(2);

    return (
        <div
            className="flex flex-col bg-gray-800 w-[80vw] p-6 rounded-2xl text-white cursor-pointer relative z-10"
            onClick={onClick}
        >
            <div className="flex justify-between">
                <div className="flex items-center">
                    <Image
                        src={imageSrc}
                        width={40}
                        height={40}
                        alt="Coin image"
                        className="mr-4"
                    />
                    <h1 className="font-semibold text-xl">{name}:</h1>
                    <h2 className="font-semibold ml-2 text-xl">{amount}</h2>
                </div>
                <div>
                    <h1 className="p-2 font-bold">R$: {totalValue}</h1>
                </div>
            </div>
        </div>
    );
}
