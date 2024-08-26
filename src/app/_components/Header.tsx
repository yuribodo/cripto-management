import Image from "next/image";

export default function Header() {
    return (
        <div className="flex">
             <Image
                src="/profile.png"
                width={10}
                height={10}
                alt="Picture of the author"
            />
            <p>Account</p>
        </div>
    );
}