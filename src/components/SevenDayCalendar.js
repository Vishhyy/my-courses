import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function SevenDayCalendar() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4 hover:scale-105 transition-transform">
      <FaCalendarAlt className="text-purple-500 text-3xl" />
      <div>
        <h3 className="font-bold">7-Day Calendar</h3>
        <p className="text-sm text-gray-600">Upcoming events and deadlines.</p>
      </div>
    </div>
  );
}
