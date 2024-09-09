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
            className="flex flex-col bg-gray-800 w-[90vw] sm:w-[80vw] md:w-[60vw] p-4 sm:p-6 rounded-xl sm:rounded-2xl text-white cursor-pointer relative z-10"
            onClick={onClick}
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src={imageSrc}
                        width={32} // Reduzir o tamanho da imagem em dispositivos móveis
                        height={32}
                        alt="Coin image"
                        className="mr-2 sm:mr-4"
                    />
                    <h1 className="font-semibold text-lg sm:text-xl">{name}:</h1>
                    <h2 className="font-semibold ml-1 sm:ml-2 text-lg sm:text-xl">{amount}</h2>
                </div>
                <div>
                    <h1 className="p-1 sm:p-2 font-bold text-lg sm:text-xl">R$: {totalValue}</h1>
                </div>
            </div>
        </div>
    );
}
