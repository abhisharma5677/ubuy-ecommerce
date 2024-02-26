// "use client"

import { useState } from 'react';
import SearchedSingleProduct from './SearchedSingleProduct';

const SearchPage = ({ searchResults }) => {
  const [ascendingArr, setAscendingArr] = useState([]);
  const [filterArr, setFilterArr] = useState([]);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);


  function handleSort() {
    const x = (filterArr.length > 0 ? [...filterArr] : [...searchResults]).sort((a, b) => a.price - b.price);
    setAscendingArr(x);
    console.log(ascendingArr);
  }

  function handleRange() {
    const arr = (ascendingArr.length > 0 ? ascendingArr : searchResults).filter((element) => element.price >= low && element.price <= high);
    console.log(filterArr);
    setFilterArr(arr);
  }

  return (
    <div>
      <div className='flex justify-center'>
        <div>
          <div className='flex justify-center'>
            <button type="button" className='border bg-blue-500 text-white font-bold mt-[15px] py-[10px] px-[10px]' onClick={handleSort}>SORT PRICE</button>
          </div>

          <div>
            <div className='text-gray-700 font-bold flex justify-center mt-[20px] text-[20px] mb-[10px]'>Set Price Range</div>
            <div>
              <div>
                <label htmlFor="lowerValue" className="mr-4">Lower Value :- </label>
                <input
                  type='number'
                  placeholder='Lower Value'
                  id='lowerValue'
                  value={low}
                  onChange={(e) => setLow(e.target.value)}
                  className="border mb-4 w-24"
                />
              </div>
              <div>
                <label htmlFor="higherValue" className="mr-4">Higher Value :- </label>
                <input
                  type='number'
                  placeholder='Higher Value'
                  id='higherValue'
                  value={high}
                  onChange={(e) => setHigh(e.target.value)}
                  className="border mb-4 w-24"
                />
              </div>
              <div className='flex justify-center'>
                <button
                  type='button'
                  className='border bg-blue-500 text-white font-bold ml-4 py-[10px] px-[10px] flex justify-center'
                  onClick={handleRange}
                >
                  Apply Range
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Display search results */}
      {(filterArr.length > 0 && (
        <ul className="flex flex-wrap justify-center">
          {filterArr.map((result, index) => (
            <SearchedSingleProduct key={index} imageUrl={result.image} title={result.title} price={result.price} category={result.category} id={result.id} />
          ))}
        </ul>
      )) || (
          ascendingArr.length > 0 && (
            <ul className="flex flex-wrap justify-center">
              {ascendingArr.map((result, index) => (
                <SearchedSingleProduct key={index} imageUrl={result.image} title={result.title} price={result.price} category={result.category} id={result.id} />
              ))}
            </ul>
          )
        ) || (
          searchResults.length > 0 && (
            <ul className="flex flex-wrap justify-center">
              {searchResults.map((result, index) => (
                <SearchedSingleProduct key={index} imageUrl={result.image} title={result.title} price={result.price} category={result.category} id={result.id} />
              ))}
            </ul>
          )
        )}
    </div>
  );
};

export default SearchPage;