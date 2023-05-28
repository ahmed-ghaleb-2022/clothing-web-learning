// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {auth} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import './authentication.style.scss';

const Authentication = () => {

  // useEffect(
  //   () => async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //   },
  //   []
  // );



  return (
    <div className="authentication-container">

        <SignInForm />
        <SignUpForm />
      
    </div>
  );
};

export default Authentication;
