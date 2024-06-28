import React from "react";

interface ModalProps {
  image: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 drop-shadow-lg">
      <div className="relative">
        <button
          className="absolute top-0 right-0 mt-2 mr-2 text-white text-3xl drop-shadow-lg"
          onClick={onClose}
        >
          &times;
        </button>
        <img
          className="max-w-full max-h-screen"
          src={image}
          alt="Enlarged view"
        />
      </div>
    </div>
  );
};

export default Modal;
