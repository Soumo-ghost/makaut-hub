"use client"; // Required for interactivity in Next.js App Router
import { useState } from 'react';

export default function GpaCalculator() {
  const [sgpa, setSgpa] = useState('');
  const [percentage, setPercentage] = useState(null);

  const calculate = () => {
    const val = parseFloat(sgpa);
    if (val && val >= 0.75) {
        // MAKAUT Formula: (SGPA - 0.75) * 10
        const result = (val - 0.75) * 10;
        setPercentage(result.toFixed(2));
    } else {
        alert("Please enter a valid SGPA > 0.75");
    }
  };

  return (
    <div className="p-6 border rounded-lg shadow-lg max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">MAKAUT SGPA to %</h2>
      <input 
        type="number" 
        value={sgpa} 
        onChange={(e) => setSgpa(e.target.value)}
        placeholder="Enter SGPA (e.g. 8.5)"
        className="w-full p-2 border rounded mb-4 text-black"
      />
      <button 
        onClick={calculate}
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Calculate
      </button>
      
      {percentage && (
        <div className="mt-4 text-center">
            <p className="text-gray-600">Percentage</p>
            <p className="text-3xl font-bold text-green-600">{percentage}%</p>
        </div>
      )}
    </div>
  );
}