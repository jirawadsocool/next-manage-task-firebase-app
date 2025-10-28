import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4s6A3sqw3f7liUzDXuGHqTG60eMVaLvw",
  authDomain: "manage-task-project-53cee.firebaseapp.com",
  projectId: "manage-task-project-53cee",
  storageBucket: "manage-task-project-53cee.firebasestorage.app",
  messagingSenderId: "517475348893",
  appId: "1:517475348893:web:ee9a8bc1186604f826ff74"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const firebaseApp = app;
export const firebasedb = getFirestore(app);
export const storage = getStorage(app);