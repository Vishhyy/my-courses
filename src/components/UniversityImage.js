import React from "react";
import { FaEnvelope } from "react-icons/fa";

export default function UniversityMails() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-300">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-4">University Mails</h2>
      <p className="text-gray-600">Check your latest emails.</p>
      <FaEnvelope className="w-10 h-10 text-green-500 mt-2" />
    </div>
  );
}
