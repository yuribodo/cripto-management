import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  coinName: string;
  coinValue: string;
  coinImage: string;
}

const modalVariants = {
  hidden: { opacity: 0, y: "-50px" },
  visible: { opacity: 1, y: "0px" },
  exit: { opacity: 0, y: "50px" },
};

const CoinModal: React.FC<ModalProps> = ({ isOpen, onClose, coinName, coinValue, coinImage }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-gray-800 p-6 rounded-lg text-white w-[80vw] max-w-md"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center">
              <img src={coinImage} alt={coinName} className="w-12 h-12 mr-4" />
              <h2 className="text-2xl font-semibold">{coinName}</h2>
            </div>
            <p className="mt-4 text-lg">Value: R$: {coinValue}</p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-red-600 rounded"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoinModal;
