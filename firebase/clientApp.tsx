import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const clientCredentials = {
	// apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	// authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	// projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	// storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	// messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	// appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	// measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,

	apiKey: "AIzaSyCdpyE-fl0k_6-WtvPyqf9IAE5-0Gy4bUI",
	authDomain: "gift-craker.firebaseapp.com",
	projectId: "gift-craker",
	storageBucket: "gift-craker.appspot.com",
	messagingSenderId: "569884986702",
	appId: "1:569884986702:web:9b12f5931ddafa387ce21f",
	measurementId: "G-C27HRS2MSC",
};

// Initialize Firebase
export const firebase = initializeApp(clientCredentials);
// const analytics = getAnalytics(firebase);
export const auth: any = getAuth(firebase);

export const storage: any = getStorage(firebase);

export const db = getFirestore(firebase);
