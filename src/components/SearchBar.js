import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center gap-2 my-6 bg-white p-5 rounded-full shadow-md border border-gray-300">
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onSearch(e.target.value);
        }}
        className="w-full px-6 py-4 border rounded-full bg-gray-100 text-gray-900 focus:ring focus:ring-orange-400 shadow-sm text-lg font-semibold"
      />
    </div>
  );
}
