import { useSelector, useDispatch } from "react-redux";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as JCLogo } from "../../assets/logo_big.svg";
import { setCurrentUser } from "../../store/user-slice";
import { signOutUser } from "../../service/authentication/firebase-auth";
import CartContainer from "../../components/cart-container/CartContainer";
import {
  NavbarContainer,
  NavLinksContainer,
  LogoContainer,
} from "./navbar.styles";
import { selectCurrentUser } from "../../store/user-slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const handleSignOut = async () => {
    await signOutUser();
    dispatch(setCurrentUser(null));
  };
  return (
    <>
      <NavbarContainer>
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
      </NavbarContainer>
      <Outlet />
    </>
  );
};

export default Navbar;
