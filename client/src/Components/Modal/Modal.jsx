import React from "react";
import "./styles.css";
const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal__bg">
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
