import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as JCLogo } from "../../assets/logo_big.svg";
import { userContext } from "../../contexts/user-context-provider";
import { cartContext } from "../../contexts/cart-context-provider";
import { signOutUser } from "../../service/authentication/firebase-auth";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(userContext);
  const { showCart } = useContext(cartContext);
  const handleSignOut = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <JCLogo className="logo" />
        </Link>
        <div className="nav-links-container">
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
          <CartIcon />
        </div>
        {showCart && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
