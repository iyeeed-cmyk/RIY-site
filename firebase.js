import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALhDaHEDOI43rN1Cpvvpm35Fdk-JpjkWw",
  authDomain: "riy-1-a933f.firebaseapp.com",
  projectId: "riy-1-a933f",
  storageBucket: "riy-1-a933f.firebasestorage.app",
  messagingSenderId: "796071885202",
  appId: "1:796071885202:web:faddbf103aa1936c1fe94b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
