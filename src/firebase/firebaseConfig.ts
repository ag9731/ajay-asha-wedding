import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, Firestore } from 'firebase/firestore';

// Configuration from environment variables
// To connect your production Firebase Firestore:
// 1. Create a Firebase project at https://console.firebase.google.com
// 2. Enable Firestore Database
// 3. Add these variables into your .env.local file:
//    VITE_FIREBASE_API_KEY=your_api_key
//    VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
//    VITE_FIREBASE_PROJECT_ID=your_project_id
//    VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
//    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
//    VITE_FIREBASE_APP_ID=your_app_id

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

const isConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.apiKey !== "your_api_key"
);

if (isConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
}

export interface RSVPData {
  guestName: string;
  mobileNumber?: string;
  numberOfGuests: number;
  attending: 'accept' | 'decline';
  message?: string;
  timestamp?: unknown;
}

export async function submitRSVP(data: RSVPData): Promise<{ success: boolean; id?: string; source: 'firestore' | 'local' }> {
  // Always persist to local backup for client-side state & redundancy
  try {
    const existing = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
    existing.push({ ...data, submittedAt: new Date().toISOString() });
    localStorage.setItem('wedding_rsvps', JSON.stringify(existing));
    localStorage.setItem('user_has_rsvpd', 'true');
  } catch (e) {
    console.warn('LocalStorage backup warning:', e);
  }

  // If live Firestore is configured, save directly to Firestore
  if (db && isConfigured) {
    try {
      const docRef = await addDoc(collection(db, 'rsvps'), {
        ...data,
        createdAt: serverTimestamp(),
      });
      return { success: true, id: docRef.id, source: 'firestore' };
    } catch (err) {
      console.error("Error submitting RSVP to Firestore:", err);
      throw err;
    }
  }

  // Graceful active fallback: if Firestore credentials are not set yet,
  // we successfully capture it locally and provide friendly developer feedback
  await new Promise((resolve) => setTimeout(resolve, 800)); // simulate realistic network feel
  console.info(
    "%c[Wedding RSVP]%c Response recorded locally. (To push to cloud Firestore, add Firebase environment variables in .env)",
    "color: #D4AF37; font-weight: bold;",
    "color: inherit;",
    data
  );
  return { success: true, id: 'local-' + Date.now(), source: 'local' };
}

export { db, isConfigured };

