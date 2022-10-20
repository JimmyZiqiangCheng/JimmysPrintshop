import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { useContext } from "react";
import { cartContext } from "../../contexts/cart-context-provider";

const CartContainer = () => {
  const { showCart } = useContext(cartContext);
  return (
    <>
      <CartIcon />
      {showCart && <CartDropdown />}
    </>
  );
};

export default CartContainer;
