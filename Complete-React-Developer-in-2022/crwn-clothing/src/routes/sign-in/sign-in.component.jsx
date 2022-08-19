import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils"

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { SignUpFormComponent } from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

    // useEffect(() => {
    //     const innerFunc = async () => {
    //         const res = await getRedirectResult(auth);
    //         if (res) {
    //             const userDocRef = await createUserDocumentFromAuth(res.user);
    //             console.log(userDocRef);
    //         }
    //     };
    //     innerFunc();
    // }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(userDocRef);
    }

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>LogIn With Google Popup</button>
            {/*<button onClick={signInWithGoogleRedirect}>LogIn With Google</button>*/}
            <SignUpFormComponent />
        </div>
    );
};

export default SignIn;