import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.style.scss";



const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFileds, setFormFileds] = useState(defaultFormFields);
  const { email, password } = formFileds;

  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFileds({ ...formFileds, [name]: value });
  };

  const restFormFileds = () => {
    setFormFileds(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      
      restFormFileds();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect passwor for email");
          break;
        case "auth/user-not-found":
          alert("no user associtated with this email");
          break;

        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
