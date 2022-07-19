import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBPJlyF0b3XMzGf5blc2USSGE3QQKU-H3A",
    authDomain: "movie-app-83041.firebaseapp.com",
    projectId: "movie-app-83041",
    storageBucket: "movie-app-83041.appspot.com",
    messagingSenderId: "330609653371",
    appId: "1:330609653371:web:bcec1002232ac71ea594de"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
        })
        .catch((error) => {
            console.log(error);
        });
};
