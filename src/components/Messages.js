import React from "react";
import { FaComments } from "react-icons/fa";

export default function Messages() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
      <FaComments className="text-yellow-500 w-6 h-6" />
      <div>
        <h3 className="font-bold">Messages</h3>
        <p className="text-sm text-gray-600">Check recent messages.</p>
      </div>
    </div>
  );
}
