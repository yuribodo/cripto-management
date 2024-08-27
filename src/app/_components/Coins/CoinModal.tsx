import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  coinName: string;
  coinValue: string;
  coinImage: string;
}

const CoinModal: React.FC<ModalProps> = ({ isOpen, onClose, coinName, coinValue, coinImage }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-gray-800 p-6 rounded-lg text-white w-[80vw] max-w-md">
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
      </div>
    </div>
  );
};

export default CoinModal;
