import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore/lite';
import { Constants } from "./constant";

const firebaseConfig = ({
  apiKey: Constants.API_KEY,
  authDomain: Constants.AUTH_DOMAIN,
  projectId: Constants.PROJECT_ID,
  storageBucket: Constants.STORAGE_BUCKET,
  messagingSenderId: Constants.messagingSenderId,
  appId: Constants.APP_ID,
  measurementId: Constants.MEASUREMENT_ID
});

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);