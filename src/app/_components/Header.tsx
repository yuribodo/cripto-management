import Image from "next/image";
import { Search, Bell, Settings } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-slate-800 p-4 rounded-xl text-white">
      <div className="flex items-center space-x-2">
        <Image
          src="/profile.png"
          width={40}
          height={40}
          alt="Profile"
          className="rounded-full"
        />
        <p>Account</p>
      </div>

      <div className="flex items-center space-x-6">
        <Search className="h-6 w-6 cursor-pointer" />
        <Bell className="h-6 w-6 cursor-pointer" />
        <Settings className="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
}
