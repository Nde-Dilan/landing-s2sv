
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUNppePmeIigHwrkKW_MMlBnT7lnkCRfc",
  authDomain: "ride-sharing-a8947.firebaseapp.com",
  databaseURL: "https://ride-sharing-a8947-default-rtdb.firebaseio.com",
  projectId: "ride-sharing-a8947",
  storageBucket: "ride-sharing-a8947.appspot.com",
  messagingSenderId: "10980423334",
  appId: "1:10980423334:web:e43f0e51e33b94ec44a667",
  measurementId: "G-KJCM99FD14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
