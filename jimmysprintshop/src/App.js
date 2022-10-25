import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener } from "./service/authentication/firebase-auth";
import { createUser } from "./service/database/firebase-store";
import { setCurrentUser } from "./store/User/user-action";
import Navigation from "./routes/navigation/navigation";
import Home from "./routes/home/home";
import Shop from "./routes/shop/shop";
import AuthPage from "./routes/authPage/authPage";
import Checkout from "./routes/checkout/Checkout";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUser(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
