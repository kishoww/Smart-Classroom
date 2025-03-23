import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../config/firebase.config";

const Security = () => {
  const [cameraStatus, setCameraStatus] = useState({
    cam1 : "Detected"
  });
  const [lights, setLights] = useState({});

  useEffect(() => {
    // Fetch camera status in real-time
    const camRef = ref(db, "cam");
    const unsubscribeCam = onValue(camRef, (snapshot) => {
      if (snapshot.exists()) {
        setCameraStatus(snapshot.val());
      } else {
        console.log("No camera data available");
      }
    }, (error) => console.error("Error fetching camera data:", error));

    // Fetch light status in real-time
    const lightRef = ref(db, "lights");
    const unsubscribeLights = onValue(lightRef, (snapshot) => {
      if (snapshot.exists()) {
        setLights(snapshot.val());
      } else {
        console.log("No light data available");
      }
    }, (error) => console.error("Error fetching light data:", error));

    return () => {
      unsubscribeCam();
      unsubscribeLights();
    }; // Cleanup on unmount
  }, []);

  const cameraLightPairs = [
    { cam: "cam1", light: "light1" },
    { cam: "cam1", light: "light2" },
    { cam: "cam2", light: "light3" },
    { cam: "cam2", light: "light4" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      {cameraLightPairs.map(({ cam, light }) => (
        <div
          key={`${cam}-${light}`}
          className="h-32 rounded-sm bg-gray-50 dark:bg-gray-800 text-white grid grid-cols-2 items-center justify-center text-center p-4"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className={`font-bold ${cameraStatus[cam] === "Detected" ? "text-green-500" : "text-red-500"}`}> 
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
                className="lucide lucide-cctv"
              >
                <path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" />
                <path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" />
                <path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" />
                <path d="M2 21v-4" />
                <path d="M7 9h.01" />
              </svg>
            </h1>
            <h1 className="font-bold">{cam.toUpperCase()} : {cameraStatus[cam] || "N/A"}</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
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
            <h1 className="font-bold">{light.toUpperCase()} : {lights[light] || "N/A"}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Security;