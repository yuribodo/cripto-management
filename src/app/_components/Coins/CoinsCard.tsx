import Image from "next/image";

interface CoinsCardProps {
  imageSrc: string;
  name: string;
  value: string;
  onClick: () => void;
}

export default function CoinsCard({ imageSrc, name, value, onClick }: CoinsCardProps) {
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
                    <h1 className="font-semibold text-xl">{name}</h1>
                </div>
                <div>
                    <h1 className="p-2 font-bold">R$: {value}</h1>
                </div>
            </div>
        </div>
    );
}
