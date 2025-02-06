import React from "react";
import { FaDiscord } from "react-icons/fa";

export default function CourseOverview({ courses }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-300 mt-6">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Course Overview</h2>
      <div className="grid grid-cols-2 gap-8">
        {courses.map(course => (
          <div key={course.id} className="bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-3xl p-6 flex flex-col items-center space-y-6 border border-gray-300">
            <h3 className="text-2xl font-semibold text-gray-900">{course.name}</h3>
            <p className="text-gray-700 text-lg">{course.term}</p>
            <p className="text-md text-gray-600">{course.environment}</p>
            {course.discord && (
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-125">
                <FaDiscord className="w-14 h-14" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
