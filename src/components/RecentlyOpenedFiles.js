import React from "react";
import { FaFileAlt } from "react-icons/fa";

export default function RecentFiles() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
      <FaFileAlt className="text-blue-500 w-6 h-6" />
      <div>
        <h3 className="font-bold">Recently Opened Files</h3>
        <p className="text-sm text-gray-600">Quickly access your latest work.</p>
      </div>
    </div>
  );
}
