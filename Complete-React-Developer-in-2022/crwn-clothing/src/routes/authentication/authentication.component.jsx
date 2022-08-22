import { SignUpFormComponent } from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss';

const Authentication = () => {

    // useEffect(() => {
    // redirect example
    //     const innerFunc = async () => {
    //         const res = await getRedirectResult(auth);
    //         if (res) {
    //             const userDocRef = await createUserDocumentFromAuth(res.user);
    //             console.log(userDocRef);
    //         }
    //     };
    //     innerFunc();
    // }, []);

    return (
        <div className="authentication-container">
            {/*<button onClick={signInWithGoogleRedirect}>LogIn With Google</button>*/}
            <SignInForm />
            <SignUpFormComponent />
        </div>
    );
};

export default Authentication;