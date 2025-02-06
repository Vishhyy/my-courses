import React from "react";
import { FaEnvelope, FaCog } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 shadow-xl p-6 rounded-xl flex justify-between items-center">
      <img src="/UNILOGO-removebg-preview.png" alt="University Logo" className="h-12" />
      <div className="flex gap-4">
        <FaEnvelope className="text-white w-6 h-6 cursor-pointer" />
        <FaCog className="text-white w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
}
