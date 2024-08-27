import Image from "next/image";

export default function Header() {
    return (
        <div className="flex justify-between items-center bg-gray-800 p-4 rounded-xl shadow-md">
            <div className="flex items-center gap-2">
                <Image
                    src="/profile.png"
                    width={40}  
                    height={40}
                    alt="Profile Picture"
                    className="rounded-full"
                />
                <p className="text-white font-medium">Account</p>
            </div>

            <h1 className="text-white font-medium">Option 1</h1>
            <h1 className="text-white font-medium">Option 2</h1>
        </div>
    );
}
