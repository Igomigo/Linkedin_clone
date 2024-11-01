import { signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { auth } from "../firebaseConfig";

export const loginAPI = async (email, password) => {
    try {
        let response = await signInWithEmailAndPassword(auth, email, password);
        return response;
    } catch (err) {
        throw err;
    }
}

export const registerAPI = async (email, password) => {
    try {
        let response = await createUserWithEmailAndPassword(auth, email, password);
        return response;
    } catch (err) {
        throw err;
    }
}

export const GoogleSignInAPI = async () => {
    try {
        const authProvider = new GoogleAuthProvider();
        let res = await signInWithPopup(auth, authProvider);
        return res;
    } catch (err) {
        throw err;
    }
}