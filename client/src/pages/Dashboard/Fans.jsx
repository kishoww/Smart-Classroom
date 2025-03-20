import React, { useState } from "react";

const Fans = () => {
  const [Fan, setFan] = useState("OFF");

  const color = Fan === "ON" ? "text-green-300" : "text-gray-400"; // Fix color for OFF state

  return (
    <div className="">
      <div className="">
        <div className="grid grid-rows-5 gap-4 mb-4">
          <div className="grid grid-cols-1 h-32 rounded-sm bg-gray-50 dark:bg-gray-800 text-white">
            <div className="flex justify-center gap-2 items-center">
              <h1 className={`font-style ${color}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2" // Fixed camelCase
                  strokeLinecap="round" // Fixed camelCase
                  strokeLinejoin="round" // Fixed camelCase
                  className="lucide lucide-fan" // Fixed className
                >
                  <path d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" />
                  <path d="M12 12v.01" />
                </svg>
              </h1>
              <h1 className="font-style">Fan : {Fan}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fans;
