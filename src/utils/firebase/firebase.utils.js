// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithPopup,
	signInWithRedirect,
	GoogleAuthProvider
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAMJl3x22pxuJRGIhqTBR6PIhGqKy8KqWs",
	authDomain: "apollo-artemis-clothing.firebaseapp.com",
	projectId: "apollo-artemis-clothing",
	storageBucket: "apollo-artemis-clothing.appspot.com",
	messagingSenderId: "167219833158",
	appId: "1:167219833158:web:c2af905847320421d85d47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account"
});

// export const auth = getAuth(app);
// export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
