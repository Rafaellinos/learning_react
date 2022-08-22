import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore"
import config from "../../config";

const firebaseConfig = {
    apiKey: config.fireBaseApiKey,
    authDomain: "enhanced-cursor-255314.firebaseapp.com",
    projectId: "enhanced-cursor-255314",
    storageBucket: "enhanced-cursor-255314.appspot.com",
    messagingSenderId: "274195442579",
    appId: "1:274195442579:web:1597a434d65b4ee9559666"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    if (!userAuth) return;
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
            console.log("user created");
        } catch (error) {
            console.error(error.message);
        }
    }
    return userDocRef;
}

export const getUserByUid = async (uuid) => {
    if (!uuid) return;
    const userDocRef = doc(db, "users", uuid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        throw new Error("User not found error");
    }
    return userSnapshot;
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInWithEmailPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}
