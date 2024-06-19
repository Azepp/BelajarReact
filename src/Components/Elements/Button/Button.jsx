import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ children, onClick = () => {}, variant = "bg-neutral-700", text = "neutral-50", margin, hover = "bg-neutral-900", size = "full", type }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={`w-${size} px-6 py-2 ${variant} rounded-full text-${text} hover:${hover} font-bold ${margin}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
