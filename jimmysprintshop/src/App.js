import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { onAuthStateChangedListener } from "./service/authentication/firebase-auth";
import { createUser } from "./service/database/firebase-store";
import { setCurrentUser } from "./store/User/user-action";
import Navbar from "./routes/navbar/Navbar";
import HomePage from "./routes/homepage/HomePage";
import Spinner from "./components/spinner/Spinner";
import RedirectRoute from "./components/redirect-route/RedirectRoute";

const Checkout = lazy(() => import("./routes/checkout/Checkout"));
const Shop = lazy(() => import("./routes/shop/shop"));
const AuthPage = lazy(() => import("./routes/authPage/authPage"));
const Payment = lazy(() => import("./routes/payment/Payment"));

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
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="shop/*" element={<Shop />} />
          <Route
            path="auth"
            element={
              <RedirectRoute redirect="/" requireUser={true}>
                <AuthPage />
              </RedirectRoute>
            }
          />
          <Route path="checkout" element={<Checkout />} />
          <Route
            path="payment"
            element={
              <RedirectRoute redirect="/auth" requireUser={false}>
                <Payment />
              </RedirectRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
