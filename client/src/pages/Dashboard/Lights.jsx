import { ref, get } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase.config";

const Lights = () => {

  const [lights, setLights] = useState({
    light1: "ON",
    light2: "OFF",
    light3: "OFF",
    light4: "ON",
    lux1: "1000",
    lux2: "1000",
    lux3: "1000",
    lux4: "1000",
  });

  const setData = async () => {
    try {
      const snapshot = await get(ref(db, 'lights'));
      if (snapshot.exists()) {
        setLights(snapshot.val());  // Update state
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

  const renderLight = (lightNumber) => {
    const isOn = lights[`light${lightNumber}`] === "ON";
    return (
      <div className="grid grid-cols-2 h-32 rounded-sm bg-gray-50 dark:bg-gray-800 text-white">
        <div className="flex justify-center gap-2 items-center">
          <h1 className="text-yellow-300 font-style">
            {isOn ? (
              <div className="text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lightbulb"
                >
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
            ) : (
              <div className="text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lightbulb-off"
                >
                  <path d="M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" />
                  <path d="m2 2 20 20" />
                  <path d="M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
              </div>
            )}
          </h1>
          <h1 className="font-style">Light {lightNumber}: {lights[`light${lightNumber}`]}</h1>
        </div>
        <div className="flex justify-center items-center font-style">
          <h1>LUX Value: {lights[`lux${lightNumber}`]}</h1>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <div className="">
        <div className="grid grid-rows-5 gap-4 mb-4">
          {renderLight(1)}
          {renderLight(2)}
          {renderLight(3)}
          {renderLight(4)}
        </div>
      </div>
    </div>
  );
};

export default Lights;
