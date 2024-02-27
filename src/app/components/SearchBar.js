"use client"

import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex rounded-md">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for Products, Brands and More"
        className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none lg:w-[800px]"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r focus:outline-none lg:w-[120px]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
