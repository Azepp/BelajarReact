import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ children, to, variant = "bg-neutral-700", text = "neutral-50", margin, hover = "bg-neutral-900", size = "full" }) => {
  const navigate = useNavigate(); // Pindahkan ke dalam komponen

  return (
    <button
      onClick={() => {
        navigate(to); // Gunakan `to` sebagai path tujuan navigasi
      }}
      className={`w-${size} px-6 py-2 ${variant} rounded-full text-${text} hover:${hover} font-bold ${margin}`}
    >
      {children}
    </button>
  );
};

export default Button;
