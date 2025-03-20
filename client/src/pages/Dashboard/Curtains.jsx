import React, { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../../config/firebase.config";


const Curtains = () => {

  const [Curtain, setCurtain] = useState("Closed");
  const color = Curtain === "Open" ? "text-blue-400" : "text-gray-400"; // Fix color for OFF state

  const setData = async () => {
    try {
      const snapshot = await get(ref(db, 'curtain'));
      if (snapshot.exists()) {
        setCurtain(snapshot.val());  // Update state
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

  return (
    <div>
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
                    className="lucide lucide-blinds" // Fixed className
                  >
                    <path d="M3 3h18" />
                    <path d="M20 7H8" />
                    <path d="M20 11H8" />
                    <path d="M10 19h10" />
                    <path d="M8 15h12" />
                    <path d="M4 3v14" />
                    <circle cx="4" cy="19" r="2" />
                  </svg>
                </h1>
                <h1 className="font-style">Curtain : {Curtain}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curtains;
