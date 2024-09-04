import React, { useState } from "react";
import Image from "next/image";
import { Bell, Settings } from "lucide-react";
import Notifications from "./Notifications";
import SettingsModal from "./SettingsModal";
import SearchBar from "./SearchBar";  

export default function Header() {
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const toggleNotifications = () => {
    setNotificationOpen(!isNotificationOpen);
  };

  const toggleSettings = () => {
    setSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="relative">
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
          <SearchBar />
          <Bell className="h-6 w-6 cursor-pointer" onClick={toggleNotifications} />
          <Settings className="h-6 w-6 cursor-pointer" onClick={toggleSettings} />
        </div>
      </div>

      {isNotificationOpen && (
        <Notifications isOpen={isNotificationOpen} onClose={toggleNotifications} />
      )}
      
      {isSettingsOpen && (
        <SettingsModal isOpen={isSettingsOpen} onClose={toggleSettings} />
      )}
    </div>
  );
}
