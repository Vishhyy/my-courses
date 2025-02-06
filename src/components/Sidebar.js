import React from "react";
import { FaHome, FaEnvelope, FaBell, FaCalendarAlt, FaFileAlt } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-1/5 bg-white p-8 rounded-3xl shadow-xl flex flex-col space-y-6 border border-gray-300">
      <div className="flex items-center space-x-3 text-gray-900 text-xl font-bold hover:text-orange-500 transition">
        <FaHome className="w-7 h-7" />
        <span>Dashboard</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-900 text-lg hover:text-orange-500 transition">
        <FaEnvelope className="w-6 h-6 text-green-500" />
        <span>University Mails</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-900 text-lg hover:text-orange-500 transition">
        <FaBell className="w-6 h-6 text-red-500" />
        <span>Upcoming Assignments</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-900 text-lg hover:text-orange-500 transition">
        <FaCalendarAlt className="w-6 h-6 text-purple-500" />
        <span>7-Day Calendar</span>
      </div>
      <div className="flex items-center space-x-3 text-gray-900 text-lg hover:text-orange-500 transition">
        <FaFileAlt className="w-6 h-6 text-blue-500" />
        <span>Recently Opened Files</span>
      </div>
    </aside>
  );
}
