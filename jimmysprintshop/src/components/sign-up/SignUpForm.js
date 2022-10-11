import { useState } from "react";
import { signUpWithEmail } from "../../service/authentication/firebase-auth";
import { createUser } from "../../service/database/firebase-store";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import "./sign-up-form.styles.scss";

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
      const { user } = await signUpWithEmail(email, password);
      await createUser(user, { displayName });
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
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            value: displayName,
            name: "displayName",
            onChange: handleChange,
            required: true,
          }}
        />
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            value: email,
            name: "email",
            onChange: handleChange,
            required: true,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            value: password,
            name: "password",
            onChange: handleChange,
            required: true,
            minLength: "8",
          }}
        />
        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            value: confirmPassword,
            name: "confirmPassword",
            onChange: handleChange,
            required: true,
            minLength: "8",
          }}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
