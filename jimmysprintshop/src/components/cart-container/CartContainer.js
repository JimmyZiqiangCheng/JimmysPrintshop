import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { useContext } from "react";
import { cartContext } from "../../contexts/cart-context-provider";

const CartContainer = () => {
  const { showCart } = useContext(cartContext);
  return (
    <div className="cart-container">
      <CartIcon />
      {showCart && <CartDropdown />}
    </div>
  );
};

export default CartContainer;
