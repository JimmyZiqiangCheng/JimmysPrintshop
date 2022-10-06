import { signInWithGooglePopup } from "../../service/firebase/firebase-auth";
import { createUser } from "../../service/firebase/firebase-store";
const SignIn = () => {
  const logInGoogle = async () => {
    const response = await signInWithGooglePopup();
    createUser(response.user);
  };
  return (
    <div>
      <button onClick={logInGoogle}> sign in with google</button>
    </div>
  );
};

export default SignIn;
