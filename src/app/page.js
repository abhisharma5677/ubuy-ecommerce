"use client"

import HomePage from "./components/HomePage";
import SearchBar from "./components/SearchBar";
import SearchPage from "./components/SearchPage";
import axios from "axios";
import { useState, useEffect , useContext } from "react";
import HomeContext from "./context/HomeContext";


export default function Home() {

  const [searchResults, setSearchResults] = useState([]);
  const {isSearched} = useContext(HomeContext);
  const {setIsSearched} = useContext(HomeContext);


  const handleSearch = async (query) => {

    // Perform search operation here, for example, fetch data from an API
    // For demonstration, let's just log the query

    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${query}`);
      console.log(response.data);
      setSearchResults(response.data);
      console.log(searchResults);
      setIsSearched(true);

    } catch (error) {

      console.log(error);

    }

    console.log('Searching for:', query);
  };

  useEffect(() => {
    console.log('Search Results:', searchResults);
  }, [searchResults]);

  return (
    <div>
      <div className='flex justify-center mt-[20px] ' ><SearchBar onSearch={handleSearch} /></div>

      {isSearched ? <SearchPage searchResults={searchResults} /> : <HomePage />}
      
      {/* <SearchPage sendDataToParent={handleDataFromChild} />
      <HomePage /> */}
    </div>
  );
}
