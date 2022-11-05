import { lazy, Suspense, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { onAuthStateChangedListener } from "./service/authentication/firebase-auth";
import { createUser } from "./service/database/firebase-store";
import { setCurrentUser } from "./store/User/user-action";
import Navigation from "./routes/navigation/navigation";
import Home from "./routes/home/home";
import Payment from "./routes/payment/Payment";
import Spinner from "./components/spinner/Spinner";
import RedirectRoute from "./components/redirect-route/RedirectRoute";

const Checkout = lazy(() => import("./routes/checkout/Checkout"));
const Shop = lazy(() => import("./routes/shop/shop"));
const AuthPage = lazy(() => import("./routes/authPage/authPage"));

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
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route
            path="shop/*"
            element={
              <RedirectRoute redirect="/auth" requireUser={false}>
                <Shop />
              </RedirectRoute>
            }
          />
          <Route
            path="auth"
            element={
              <RedirectRoute redirect="/" requireUser={true}>
                <AuthPage />
              </RedirectRoute>
            }
          />
          <Route
            path="checkout"
            element={
              <RedirectRoute redirect="/auth" requireUser={false}>
                <Checkout />
              </RedirectRoute>
            }
          />
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
