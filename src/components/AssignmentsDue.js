import React from "react";
import { FaBell } from "react-icons/fa";

export default function AssignmentsDue() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex items-center space-x-4 hover:scale-105 transition-transform">
      <FaBell className="text-red-500 text-3xl" />
      <div>
        <h3 className="font-bold">Upcoming Assignments</h3>
        <p className="text-sm text-gray-600">3 assignments due this week.</p>
      </div>
    </div>
  );
}
