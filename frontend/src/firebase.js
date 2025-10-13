import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'; 

const firebaseConfig = {
  apiKey: "AIzaSyC7ImJR4CscCJqU4CVeltD7dgli4pNB6XI",
  authDomain: "login-f01b6.firebaseapp.com",
  projectId: "login-f01b6",
  storageBucket: "login-f01b6.firebasestorage.app",
  messagingSenderId: "854289522649",
  appId: "1:854289522649:web:6a868defe025958d3bc3c8",
  measurementId: "G-WLY7JPBM0C"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth (app);

//Provedor Google
const googleProvider = new GoogleAuthProvider();

//Função login popup
async function signInWithGooglePopup() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        throw error;
    }
}


async function logout() {
    await signOut(auth);
}

export { auth, googleProvider, signInWithGooglePopup, logout };

