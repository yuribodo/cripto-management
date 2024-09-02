import React from "react";
import { motion } from "framer-motion";

interface NotificationsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Notifications({ isOpen, onClose }: NotificationsProps) {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: isOpen ? 0 : 300, opacity: isOpen ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 h-full w-80 bg-slate-700 p-4 shadow-lg text-white "
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Notifications</h2>
        <button onClick={onClose} className="text-sm font-bold">
          Close
        </button>
      </div>
      <div className="space-y-4">
        <div className="p-3 bg-slate-600 rounded-lg">
          <p>Notification 1</p>
        </div>
        <div className="p-3 bg-slate-600 rounded-lg">
          <p>Notification 2</p>
        </div>
        <div className="p-3 bg-slate-600 rounded-lg">
          <p>Notification 3</p>
        </div>
      </div>
    </motion.div>
  );
}
