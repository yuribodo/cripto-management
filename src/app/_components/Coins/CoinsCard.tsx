import Image from "next/image";

export default function CoinsCard() {
    return (
        <div className=" flex flex-col bg-green-50 w-[80vw] p-6 rounded-2xl ">
            <div className="flex  justify-between">
                <div className="flex">
                    <Image
                        src="/profile.png"
                        width={10}
                        height={10}
                        alt="Picture of the author"
                    />
                    <h1 className=" font-semibold text-xl">Bitcoin</h1>
                </div>
                <div>
                    <h1 className=" p-2 font-bold">R$: 300000</h1>
                </div>
            </div>
        </div>
    );
}