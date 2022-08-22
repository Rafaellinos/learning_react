import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {useState} from "react";
import {
    signInWithEmailPassword,
    getUserByUid,
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.scss';

const defaultSignInFields = {
    email: '',
    password: ''
}


const SignInForm = () => {
    const [ signInFields, setSignInFields ] = useState(defaultSignInFields);
    const { email, password } = signInFields;

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setSignInFields({...signInFields, [name]: value})
    }

    const handlerSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            alert("Email and password is required");
            return;
        }
        try {
            const {user} = await signInWithEmailPassword(email, password);
            const userInfo = await getUserByUid(user.uid);
            console.log(userInfo);
        } catch (err) {
            switch (err.code) {
                case "auth/wrong-password":
                    alert("User or Passwrod incorrect");
                    break;
                case "auth/user-not-found":
                    alert("User not found");
                    break;
                default:
                    alert("An unknown error occurred");
            }
            console.error(err.message)
        }
    }

    const logGoogleUser = async (event) => {
        event.preventDefault();
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(userDocRef);
    }

    return (
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handlerSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={inputHandler}
                    name="email"
                    value={email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={inputHandler}
                    name="password"
                    value={password}
                />
                <div className="buttons-container">
                    <Button type="submit">SIGN IN</Button>
                    <Button buttonType="google" type="button" onClick={logGoogleUser}>GOOGLE SIGN IN</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;