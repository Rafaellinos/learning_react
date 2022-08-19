import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(userDocRef);
    }

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>LogIn With Google</button>
        </div>
    );
};

export default SignIn;