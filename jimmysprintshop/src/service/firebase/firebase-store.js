import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export const db = getFirestore();

export const createUser = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.error("fail to create user: ", err.message);
    }
  }
  return userDocRef;
};
