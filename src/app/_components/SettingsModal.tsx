import React from "react";
import { motion } from "framer-motion";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-slate-700 p-6 md:p-8 rounded-lg w-[90vw] max-w-2xl md:w-[40vw] text-white shadow-xl">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Settings</h2>
        
        <div className="space-y-4 md:space-y-6">
          <div className="bg-slate-600 p-3 md:p-4 rounded-lg">
            <h3 className="text-base md:text-lg font-semibold">General Settings</h3>
            <p className="text-xs md:text-sm text-gray-300">Adjust your general preferences here.</p>
          </div>

          <div className="bg-slate-600 p-3 md:p-4 rounded-lg">
            <h3 className="text-base md:text-lg font-semibold">Account Settings</h3>
            <p className="text-xs md:text-sm text-gray-300">Manage your account details.</p>
          </div>

          <div className="bg-slate-600 p-3 md:p-4 rounded-lg">
            <h3 className="text-base md:text-lg font-semibold">Privacy Settings</h3>
            <p className="text-xs md:text-sm text-gray-300">Control your privacy settings.</p>
          </div>
        </div>
        
        <div className="flex justify-end mt-6 md:mt-8">
          <button
            onClick={onClose}
            className="bg-red-500 px-4 py-2 md:px-6 md:py-2 rounded-lg font-bold hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>
  );
}
