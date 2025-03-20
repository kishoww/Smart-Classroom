import React, { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from "../config/firebase.config"; // ✅ Ensure this path is correct

const Table = () => {
  const [People, setPeople] = useState({}); // ✅ Initialize as empty object

  const setData = async () => {
    try {
      const snapshot = await get(ref(db, "people"));
      if (snapshot.exists()) {
        setPeople(snapshot.val() || {}); // ✅ Prevents null state
        console.log("Fetched Data:", snapshot.val());
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Student Name</th>
              <th scope="col" className="px-6 py-3">Roll No</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Ashwin Krishna
              </th>
              <td className="px-6 py-4">CB.EN.U4ELC21009</td>
              <td>{String(People.ashwin) === "true" ? "Present" : "Absent"}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                G Siva Prasad
              </th>
              <td className="px-6 py-4">CB.EN.U4ELC21020</td>
              <td>{String(People.siva) === "true" ? "Present" : "Absent"}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                SVN Mohan Krishna
              </th>
              <td className="px-6 py-4">CB.EN.U4ELC21057</td>
              <td>{String(People.solasa) === "true" ? "Present" : "Absent"}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Yakkala Sujith
              </th>
              <td className="px-6 py-4">CB.EN.U4ELC21069</td>
              <td>{String(People.sujith) === "true" ? "Present" : "Absent"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
