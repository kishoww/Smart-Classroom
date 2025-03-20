import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../config/firebase.config";

const Security = () => {
  const [cameraStatus, setCameraStatus] = useState({
    cam1: "Detected",
    cam2: "Detected",
    cam3: "Detected",
    cam4: "Detected",
  });

  // Fetch camera status from Firebase in real-time
  useEffect(() => {
    const camRef = ref(db, "cam");

    const unsubscribe = onValue(camRef, (snapshot) => {
      if (snapshot.exists()) {
        setCameraStatus(snapshot.val());
      } else {
        console.log("No data available");
      }
    }, (error) => {
      console.error("Error fetching data:", error);
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  // Toggle camera status (local state only)
  const toggleCamera = (cam) => {
    setCameraStatus((prevStatus) => ({
      ...prevStatus,
      [cam]: prevStatus[cam] === "Detected" ? "Clear" : "Detected",
    }));
  };

  return (
    <div>
      <div className="">
        <div className="">
          <div className="grid grid-rows-5 gap-4 mb-4">
            {Object.entries(cameraStatus).map(([cam, status], index) => (
              <div
                key={index}
                className="grid grid-cols-1 h-32 rounded-sm bg-gray-50 dark:bg-gray-800 text-white cursor-pointer"
                onClick={() => toggleCamera(cam)}
              >
                <div className="flex justify-center gap-2 items-center">
                  <h1
                    className={`font-style ${status === "Detected" ? "text-green-500" : "text-red-500"
                      }`}
                  >
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
                  <h1 className="font-style">
                    {cam.toUpperCase()} : {status}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
