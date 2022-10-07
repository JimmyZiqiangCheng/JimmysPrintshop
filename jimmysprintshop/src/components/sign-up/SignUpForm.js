import { useState } from "react";
import { signUpWithEmail } from "../../service/authentication/firebase-auth";
import { createUser } from "../../service/database/firebase-store";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password.length < 5) return alert("password too short!");
    if (password !== confirmPassword) return alert("passwords do not match");
    try {
      const response = await signUpWithEmail(email, password);
      const userDocRef = await createUser(response.user, { displayName });
      console.log(userDocRef);
      resetFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("user already existed");
      }
      console.error(err.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Sign Up with email</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          value={displayName}
          name="displayName"
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          required
          minLength="8"
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
          required
          minLength="8"
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
