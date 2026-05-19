// src/services/apiHandler.ts
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { UserProfile } from "./types";

/**
 * Central Framework Registration Handler
 */
export const registerUserCore = async (profile: UserProfile): Promise<void> => {
  // 1. Core Validation Logic
  if (!profile.email || !profile.password) {
    throw new Error("Missing credentials in central handler.");
  }

  // 2. Execute Authentication Request
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    profile.email,
    profile.password,
  );

  const uid = userCredential.user.uid;

  // 3. Firestore Database Core Schema
  const userDocRef = doc(db, "users", uid);
  await setDoc(userDocRef, {
    email: profile.email,
    createdAt: new Date().toISOString(),
    onboardingComplete: false,
  });
};
