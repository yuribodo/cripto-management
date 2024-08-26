import Image from "next/image";

export default function Header() {
    return (
        <div className="flex justify-between items-center bg-slate-200 p-4">
            <div className="flex ">
                <Image
                    src="/profile.png"
                    width={10}
                    height={10}
                    alt="Picture of the author"
                />
                <p>Account</p>
            </div>
            

            <h1 className="">Option 1</h1>
            <h1>Option 2</h1>
        </div>
    );
}