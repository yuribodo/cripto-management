import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    
    console.log("Pesquisando por:", searchQuery);
  };

  return (
    <div className="relative flex items-center">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        className="p-2 rounded-lg w-full bg-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search
        className="h-6 w-6 text-white cursor-pointer absolute right-2"
        onClick={handleSearch}
      />
    </div>
  );
}
