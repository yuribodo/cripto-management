'use client';

import React, { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { Bell, Settings, Search } from "lucide-react";
import Notifications from "./Notifications";
import SettingsModal from "./SettingsModal";

export default function Header() {
 
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleNotifications = () => {
    setNotificationOpen(!isNotificationOpen);
  };

  const toggleSettings = () => {
    setSettingsOpen(!isSettingsOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };


  return (
    <div className="relative">
      <div className="flex justify-between items-center bg-slate-800 p-4 rounded-xl text-white">


        <Link href='/account'>
          <div className="flex items-center space-x-2 cursor-pointer" >
            <Image
              src="/profile.png"
              width={40}
              height={40}
              alt="Profile"
              className="rounded-full"
            />
            <p>Account</p>
          </div>
        </Link>
        

        
        <div className="flex items-center space-x-6">
          
          <Search className="h-6 w-6 cursor-pointer" onClick={toggleSearch} />
          <Bell className="h-6 w-6 cursor-pointer" onClick={toggleNotifications} />
          <Settings className="h-6 w-6 cursor-pointer" onClick={toggleSettings} />
        </div>
      </div>

      
      {isSearchOpen && (
        <div className="absolute inset-0 bg-slate-800 bg-opacity-95 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[50%]">
            <input
              type="text"
              className="w-full p-3 rounded-lg text-black"
              placeholder="Search..."
              autoFocus
            />
            <button
              className="absolute top-2 right-3 text-black"
              onClick={toggleSearch}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {isNotificationOpen && (
        <Notifications isOpen={isNotificationOpen} onClose={toggleNotifications} />
      )}

      {isSettingsOpen && (
        <SettingsModal isOpen={isSettingsOpen} onClose={toggleSettings} />
      )}
    </div>
  );
}
