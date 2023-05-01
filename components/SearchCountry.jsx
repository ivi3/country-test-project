import React from 'react';
import SearchIcon from "../assets/icons/search.svg";

function SearchCountry({filterByCountry, setFilterByCountry}) {
    return (
        <div className="relative text-gray-600 focus-within:text-gray-400 mb-5 md:mb-10 md:w-80 w-full">
            <span className="absolute inset-y-0 left-0 flex items-center w-16 dark:[&_svg]:fill-white p-4">
                <SearchIcon/>
            </span>
            <input
                className="py-4 pl-16 pr-3 focus:outline-none bg-white shadow dark:bg-[#2b3743] w-full md:w-80"
                type="search"
                value={filterByCountry}
                onChange={event => setFilterByCountry(event.target.value)}
                placeholder="Search for a country ..."
                name="search"
            />
        </div>
    );
}

export default SearchCountry;