import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {useState} from "react";

const defaultSignInFields = {
    email: '',
    password: ''
}


const SignInForm = () => {
    const [ signInFields, setSignInFields ] = useState(defaultSignInFields);
    const { email, password } = signInFields;

    const inputHanlder = (event) => {
        const { name, value } = event.target;
        setSignInFields({...signInFields, [name]: value})
        console.log(name, value);
    }

    const handlerSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            alert("Email and password is required");
            return;
        }

    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={inputHanlder}
                    name="email"
                    value={email}
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={inputHanlder}
                    name="password"
                    value={password}
                />
                <Button type="submit">SIGN IN</Button>
                <Button buttonType="google">SIGN IN WITH GOOGLE</Button>
            </form>
        </div>
    )
}

export default SignInForm;