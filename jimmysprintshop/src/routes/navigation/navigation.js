import { useSelector, useDispatch } from "react-redux";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as JCLogo } from "../../assets/logo_big.svg";
import { setCurrentUser } from "../../store/User/user-action";
import { signOutUser } from "../../service/authentication/firebase-auth";
import CartContainer from "../../components/cart-container/CartContainer";
import {
  NavigationContainer,
  NavLinksContainer,
  LogoContainer,
} from "./navigation.styles";
import { selectCurrentUser } from "../../store/User/user-selector";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const handleSignOut = async () => {
    await signOutUser();
    dispatch(setCurrentUser(null));
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <JCLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartContainer />
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
