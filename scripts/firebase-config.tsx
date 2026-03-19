import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4KVgwn5V-4uq1anmlPozPOFOZLuBrm2M",
  authDomain: "projeto-2026-1.firebaseapp.com",
  projectId: "projeto-2026-1",
  storageBucket: "projeto-2026-1.firebasestorage.app",
  messagingSenderId: "841761236646",
  appId: "1:841761236646:web:da001f4349a41264c0b667"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};