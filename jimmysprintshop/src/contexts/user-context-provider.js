import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../service/authentication/firebase-auth";
import { createUser } from "../service/database/firebase-store";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUser(user);
      }
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);
  const value = { currentUser, setCurrentUser };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
