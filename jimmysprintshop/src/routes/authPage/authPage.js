import SignUpForm from "../../components/sign-up/SignUpForm";
import SignInForm from "../../components/sign-in/SignInForm";
import "./auth-page.styles.scss";
// import { getRedirectResult } from "firebase/auth";

const AuthPage = () => {
  // if use signInWithGoogleRedirect
  // useEffect(() => {
  //   const getGoogleRedirectResult = async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //     if (response) {
  //       const userDocRef = await createUser(response.user);
  //       console.log(userDocRef);
  //     }
  //   };
  //   getGoogleRedirectResult();
  // }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default AuthPage;
