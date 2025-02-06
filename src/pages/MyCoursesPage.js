import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaDiscord } from "react-icons/fa";
import AssignmentsDue from "../components/AssignmentsDue";
import UniversityMails from "../components/UniversityMails";
import Messages from "../components/Messages";
import SevenDayCalendar from "../components/SevenDayCalendar";
import RecentlyOpenedFiles from "../components/RecentlyOpenedFiles";

const courses = [
  { id: 1, name: "ANTH 100-395", term: "Winter 2025", environment: "Miscellaneous", progress: null, discord: true },
  { id: 2, name: "Career Education - Co-op & Internships", term: "Winter 2025", environment: "Miscellaneous", progress: null, discord: true },
  { id: 3, name: "CS 330 LAB", term: "Winter 2025", environment: "Linux, C Programming", progress: 100, discord: true },
  { id: 4, name: "CS 330-001: Introduction to Operating Systems", term: "Winter 2025", environment: "Operating Systems", progress: null, discord: true },
  { id: 5, name: "CS350: Programming Languages", term: "Winter 2025", environment: "Scheme, Racket", progress: null, discord: true },
  { id: 6, name: "GES 100", term: "Winter 2025", environment: "Textbook: Earth Science Basics", progress: 4, discord: true },
  { id: 7, name: "Vector Calculus", term: "Winter 2025", environment: "Mathematics", progress: null, discord: true },
];

export default function MyCoursesPage() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div 
      className="min-h-screen p-4 sm:p-6 md:p-8 text-gray-900 bg-cover bg-center" 
      style={{ backgroundImage: "url('/COURSESPAGE@BG.avif')" }}
    >
      {/* Main Content */}
      <div className="w-full px-4 sm:px-6 md:px-8">
        <Navbar />

        {/* University Image Section (Auto Adjust for Mobile) */}
        <div className="w-full h-48 sm:h-64 flex justify-center items-center my-4 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
          <img 
            src="/DALL·E 2025-01-31 16.16.01 - A high-quality, realistic winter-themed image of a university campus with 'U OF R' written prominently on the university sign in the foreground. The s.webp" 
            alt="University of Regina Winter Campus" 
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Search Bar (Stacked on Mobile) */}
        <div className="flex flex-col sm:flex-row items-center gap-2 my-6 bg-white p-4 sm:p-5 rounded-full shadow-md border border-gray-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 border rounded-full bg-gray-100 text-gray-900 focus:ring focus:ring-blue-400 shadow-sm text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-gray-200"
          />
        </div>

        {/* Information Sections (Single Column on Small Screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          <div className="p-2 flex justify-center hover:scale-105 transition-transform">
            <UniversityMails />
          </div>
          <div className="p-2 flex justify-center hover:scale-105 transition-transform">
            <AssignmentsDue />
          </div>
          <div className="p-2 flex justify-center hover:scale-105 transition-transform">
            <Messages />
          </div>
          <div className="p-2 flex justify-center hover:scale-105 transition-transform">
            <SevenDayCalendar />
          </div>
          <div className="p-2 flex justify-center hover:scale-105 transition-transform">
            <RecentlyOpenedFiles />
          </div>
        </div>

        {/* Course Overview (2 Columns on Desktop, 1 on Mobile) */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-gray-300 mt-6 transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">Course Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {filteredCourses.map(course => (
              <div 
                key={course.id} 
                className="bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-3xl p-4 sm:p-6 flex flex-col items-center space-y-4 sm:space-y-6 border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-900">{course.name}</h3>
                <p className="text-gray-700 text-sm sm:text-lg">{course.term}</p>
                <p className="text-md text-gray-600">{course.environment}</p>
                {course.progress !== null && (
                  <div className="w-full bg-gray-300 h-2 sm:h-3 rounded-full overflow-hidden mt-2 sm:mt-3">
                    <div className="h-full bg-green-500 transition-all duration-300 hover:bg-green-400" style={{ width: `${course.progress}%` }}></div>
                  </div>
                )}
                {course.discord && (
                  <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-transform transform hover:scale-125">
                    <FaDiscord className="w-10 sm:w-14 h-10 sm:h-14" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
