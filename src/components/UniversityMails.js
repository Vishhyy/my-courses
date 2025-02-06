import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function UniversityMails() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4 hover:scale-105 transition-transform">
      <FaEnvelope className="text-green-500 text-3xl" />
      <div>
        <h3 className="font-bold">University Mails</h3>
        <p className="text-sm text-gray-600">Check your latest emails.</p>
      </div>
    </div>
  );
}
