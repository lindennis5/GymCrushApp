// src/services/types.ts
export interface UserProfile {
  email: string;
  password?: string; // Optional because we don't store plain text passwords in Firestore
  uid?: string;
  createdAt?: string;
  onboardingComplete?: boolean;
}
