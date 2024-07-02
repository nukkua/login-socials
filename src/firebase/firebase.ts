// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAiACJlG3nmtRtec4JP0TKcfrV7VlQnHa8",
	authDomain: "profile-app-717f9.firebaseapp.com",
	projectId: "profile-app-717f9",
	storageBucket: "profile-app-717f9.appspot.com",
	messagingSenderId: "23106010497",
	appId: "1:23106010497:web:746028c6e6fd6674b57c80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const twitterProvider = new TwitterAuthProvider();

