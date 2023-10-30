import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-75" onClick={onClose} />
      <div className="z-10 w-2/5 max-w-[70rem] p-3 bg-white rounded-lg shadow-lg">
        <div className="authincation-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
