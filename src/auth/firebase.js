import { initializeApp } from "firebase/app";
import {
    getAuth,
    // GoogleAuthProvider, 
    // signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};


const app = initializeApp(firebaseConfig);
// export const database = app.firestore();
const auth = getAuth(app);

// const provider = new GoogleAuthProvider();

export const createUser = async (email, password, navigate) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password);
        navigate('/');
        console.log(userCredential);
    } catch (error) {
        console.log(error)
    }
};
export const signIn = async (email, password, navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
        console.log(userCredential);
    } catch (error) {
        console.log(error)
    }
}