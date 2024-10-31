import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebaseConfig";

export const loginAPI = async (email, password) => {
    try {
        let response = await signInWithEmailAndPassword(auth, email, password);
        return response;
    } catch (err) {
        return err;
    }
}

export const registerAPI = (email, password) => {
    try {
        let response = createUserWithEmailAndPassword(auth, email, password);
        return response;
    } catch (err) {
        return err;
    }
}