"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="p-8 rounded-lg bg-gray-800 shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Counter</h1>
        <p className="text-2xl text-center mb-8">Count: <span className="font-bold text-blue-400">{count}</span></p>
        <div className="flex gap-4">
          <button 
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors" 
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button 
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors" 
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button 
            className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition-colors" 
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
