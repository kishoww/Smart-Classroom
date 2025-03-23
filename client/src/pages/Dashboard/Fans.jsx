import React, { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../config/firebase.config";

const Fans = () => {
  const [Fan, setFan] = useState({
    fan : "",
    temperature : ""
  });

  const setData = async () => {
    try {
      const snapshot = await get(ref(db, 'fan'));
      if (snapshot.exists()) {
        setFan(snapshot.val());  // Update state
        console.log("Fetched Data:", snapshot.val()); // Log fetched data instead of old state
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setData();
  }, [])

  const color = Fan === "ON" ? "text-green-300" : "text-gray-400"; // Fix color for OFF state

  return (
    <div className="">
      <div className="">
        <div className="grid grid-rows-5 gap-4 mb-4">
          <div className="grid grid-cols-2 h-32 rounded-sm bg-gray-50 dark:bg-gray-800 text-white">
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
              <h1 className="font-style">Fan : {Fan.fan}</h1>
            </div>
            <div className="flex justify-center gap-2 items-center">
              <h1 className={`font-style ${color}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thermometer"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" /></svg>
              </h1>
              <h1 className="font-style">Temperature : {Fan.temperature}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fans;
