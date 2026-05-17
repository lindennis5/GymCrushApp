import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// @ts-ignore here because getReactNativePersistence is included in the
// runtime Metro bundle, but is omitted from standard public TypeScript definitions.
// @ts-ignore
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

// live web app Firebase credentials
const firebaseConfig = {
  apiKey: "AIzaSyAqjycSg6SYiV80uy132kivCGWXLD5aVnk",
  authDomain: "gcrush-80607.firebaseapp.com",
  projectId: "gcrush-80607",
  storageBucket: "gcrush-80607.firebasestorage.app",
  messagingSenderId: "380643784909",
  appId: "1:380643784909:web:6f4cdcd2992f8d38141184",
  measurementId: "G-G930R68DKG",
};

// Initialize Firebase App instance safely (prevents hot-reload duplication crashes)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Handle persistence initialization so user authorization states persist locally
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Cloud Firestore database instance
const db = getFirestore(app);

export { app, auth, db };
