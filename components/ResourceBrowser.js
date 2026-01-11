"use client"; // <--- Crucial! This makes the component interactive.
import { useState, useEffect } from 'react';

export default function ResourceBrowser({ resources, category }) {
  // State variables to hold user inputs
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStream, setSelectedStream] = useState('All');
  const [selectedSem, setSelectedSem] = useState('All');
  const [filteredData, setFilteredData] = useState(resources);

  // The logic that runs every time an input changes
  useEffect(() => {
    const results = resources.filter((item) => {
      // 1. Check Subject Name (Case insensitive)
      const matchesSearch = item.subject.toLowerCase().includes(searchTerm.toLowerCase());
      
      // 2. Check Stream (if 'All' is selected, ignore this check)
      const matchesStream = selectedStream === 'All' || item.stream === selectedStream;
      
      // 3. Check Semester
      // Note: We convert numbers to strings to be safe (e.g. 3 vs "3")
      const matchesSem = selectedSem === 'All' || String(item.semester) === String(selectedSem);

      return matchesSearch && matchesStream && matchesSem;
    });

    setFilteredData(results);
  }, [searchTerm, selectedStream, selectedSem, resources]);

  return (
    <div>
      {/* --- Filter Controls --- */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Search Bar */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search Subject</label>
            <input 
              type="text" 
              placeholder="e.g. Data Structures" 
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Stream Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stream / Branch</label>
            <select 
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
              value={selectedStream}
              onChange={(e) => setSelectedStream(e.target.value)}
            >
              <option value="All">All Streams</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="EE">EE</option>
              <option value="ME">ME</option>
              <option value="CE">CE</option>
            </select>
          </div>

          {/* Semester Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Semester</label>
            <select 
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
              value={selectedSem}
              onChange={(e) => setSelectedSem(e.target.value)}
            >
              <option value="All">All Semesters</option>
              <option value="1">Sem 1</option>
              <option value="2">Sem 2</option>
              <option value="3">Sem 3</option>
              <option value="4">Sem 4</option>
              <option value="5">Sem 5</option>
              <option value="6">Sem 6</option>
              <option value="7">Sem 7</option>
              <option value="8">Sem 8</option>
            </select>
          </div>
        </div>
      </div>

      {/* --- Results Display --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-lg shadow hover:shadow-md border border-gray-100 transition">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{item.subject}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.stream} • Sem {item.semester}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold">
                    {category}
                </span>
              </div>
              
              <a 
                href={item.link} 
                target="_blank" 
                className="mt-4 block w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                {category === 'Playlist' ? 'Watch Now' : 'Download / View'}
              </a>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500">
            <p>No resources found matching your filters.</p>
            <button 
                onClick={() => {setSearchTerm(''); setSelectedStream('All'); setSelectedSem('All');}}
                className="mt-2 text-blue-500 underline"
            >
                Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}