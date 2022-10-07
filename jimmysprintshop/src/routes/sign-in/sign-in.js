import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../service/authentication/firebase-auth";
import { createUser } from "../../service/database/firebase-store";
import SignUpForm from "../../components/sign-up/SignUpForm";
const SignIn = () => {
  useEffect(() => {
    const getGoogleRedirectResult = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocRef = await createUser(response.user);
        console.log(userDocRef);
      }
    };
    getGoogleRedirectResult();
  }, []);

  const logInGoogle = async () => {
    const response = await signInWithGooglePopup();
    const userDocRef = await createUser(response.user);
  };

  return (
    <div>
      <button onClick={logInGoogle}> sign in with google</button>
      <button onClick={signInWithGoogleRedirect}>
        {" "}
        sign in with google Redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
