import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../Config"; 
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const dCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = ( email, password) => {
    return signInWithEmailAndPassword(auth ,email ,password)
};

export const doSignInGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // result.user 
    return result;
};

export const  doSignOut = () => {
    return auth.signOut();
}