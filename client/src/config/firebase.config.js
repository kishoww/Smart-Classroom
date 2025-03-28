import { initializeApp } from "firebase/app";
import { getDatabase, get } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBB-a2eihPKRibslI80FTOdldwwx30FvGc",
  authDomain: "smart-classroom-c68f0.firebaseapp.com",
  databaseURL: "https://smart-classroom-c68f0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-classroom-c68f0",
  storageBucket: "smart-classroom-c68f0.firebasestorage.app",
  messagingSenderId: "370165542438",
  appId: "1:370165542438:web:45b217b2b0709aaaf640e7"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);