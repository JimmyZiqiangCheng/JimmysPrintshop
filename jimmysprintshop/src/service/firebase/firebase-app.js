import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_Ki6qVf5X0utzY3R1VwPxXqllF7w2HUU",
  authDomain: "jimmys-printshop.firebaseapp.com",
  projectId: "jimmys-printshop",
  storageBucket: "jimmys-printshop.appspot.com",
  messagingSenderId: "707624248201",
  appId: "1:707624248201:web:b8c274df52872def3c7758",
  measurementId: "G-NBP6FZLHKR",
};

export const firebaseApp = initializeApp(firebaseConfig);
