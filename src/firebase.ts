import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";

const firebaseConfig = {
  //userFirebaeConfig
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
