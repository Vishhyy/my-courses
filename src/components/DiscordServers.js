import React from "react";
import { FaDiscord } from "react-icons/fa";

export default function DiscordServers() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-300">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Join Course Discords</h2>
      <p className="text-gray-600">Connect with classmates.</p>
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-125">
        <FaDiscord className="w-10 h-10 mt-2" />
      </a>
    </div>
  );
}
