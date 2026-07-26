"use client";

import React from "react";

interface ContactButtonProps {
  color: string;
  label: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ color, label }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new Event("open-chat"));
      }}
      className={`w-full sm:w-auto text-center px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] text-white shadow-lg transition-all bg-gradient-to-r ${color} hover:brightness-110 flex items-center justify-center gap-2`}
    >
      {label}
    </button>
  );
};

export default ContactButton;
