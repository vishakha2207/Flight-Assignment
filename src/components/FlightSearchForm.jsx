import React, { useState } from 'react';
import FlightCard from './FlightCard';
import axios from 'axios';
import { FaToggleOn } from "react-icons/fa";

const FlightSearchForm = () => {
  const [origin, setOrigin] = useState('SYD');
  const [destination, setDestination] = useState('JFK');
  const [cabin, setCabin] = useState('Business');
  const [showProFilters, setShowProFilters] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

 

  const handleSearch = async () => {
    const headers = {
      'accept': 'application/json, text/plain, /',
      'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
    };

    const json_data = {
      origin,
      destination,
      'partnerPrograms': [
        'Air Canada',
        'United Airlines',
        'KLM',
        'Qantas',
        'American Airlines',
        'Etihad Airways',
        'Alaska Airlines',
        'Qatar Airways',
        'LifeMiles',
      ],
      'stops': 2,
      'departureTimeFrom': '2024-07-09T00:00:00Z',
      'departureTimeTo': '2024-10-07T00:00:00Z',
      'isOldData': false,
      'limit': 302,
      'offset': 0,
      'cabinSelection': [cabin],
      'date': '2024-07-09T12:00:17.796Z',
    };

    try {
      const response = await axios.post('https://cardgpt.in/apitest', json_data, { headers });
      console.log(response)
      setSearchResults(response.data.data);
     
    } catch (error) {
      console.error('Error fetching the data', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-950">
      <div className=" p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl mb-4 ">Choose Origin & Destination Airports:</h2>
        <div className="mb-4 bg-black  text-center">
          <label className="block text-gray-300 text-left pl-3">Origin</label>
          <select
            // value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="w-full mt-2 p-2 rounded  bg-black text-white  hover:bg-gray-600"
          >
            <option value="SYD">SYD</option>
            <option value="DEL">DEL</option>
            <option value="BOM">BOM</option>
            <option value="BNE">BNE</option>
            <option value="BLR">BLR</option>
          </select>
        </div>
        <div className="mb-4  bg-black">
          <label className="block text-left pl-3 text-gray-300">Destination</label>
          <select
            // value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full mt-2 p-2 rounded bg-black text-white  hover:bg-gray-600"
          >
            <option value="JFK">JFK</option>
            <option value="DEL">DEL</option>
            <option value="BOM">BOM</option>
            <option value="BNE">BNE</option>
            <option value="BLR">BLR</option>
          </select>
        </div>
        <div className="mb-4  bg-black">
          <label className="block text-left pl-3 text-gray-300">Cabin Selection</label>
          <select
            // value={cabin}
            onChange={(e) => setCabin(e.target.value)}
            className="w-full mt-2 p-2 rounded  bg-black text-white  hover:bg-gray-600"
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="First">First</option>
          </select>
        </div>
        <div className="mb-4 bg-black p-3">
          <label className="flex items-center space-x- text-gray-300">
            {/* <input
              checked={showProFilters}
              onChange={() => setShowProFilters(!showProFilters)}
              className="form-checkbox h-5 w-5 text-orange-600"
            /> */}
            <FaToggleOn/>
            <span className="ml-2 ">
            
            Show Pro Filters</span>
          </label>
        </div>
        <div className='text-left'>
        <button
          onClick={handleSearch}
          className="p-2 bg-teal-500 px-6 text-white rounded hover:bg-teal-600 justify-start"
        >
          Search
        </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {searchResults.length === 0
            ? <div>There are no flights</div>
            : searchResults.map((result, index) => (
                <FlightCard key={index} origin={origin}  destination={destination} result={result} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;