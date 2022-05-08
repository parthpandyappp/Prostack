import React from "react";

const Search = ({ setSearchInput, searchInput }) => {
  return (
    <div>
      <input
        className="bg-gray-50 border-2 h-12 text-base m-auto border-gray-100 outline-none text-gray-900 rounded-lg active:border-button focus-visible:border-button  focus:border-button block w-1/2 p-2.5"
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for projects"
        value={searchInput}
      />
    </div>
  );
};

export { Search };
