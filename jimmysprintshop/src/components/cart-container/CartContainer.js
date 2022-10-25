import { useSelector } from "react-redux";
import { selectShowCart } from "../../store/Cart/cart-selector";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

const CartContainer = () => {
  const showCart = useSelector(selectShowCart);
  return (
    <>
      <CartIcon />
      {showCart && <CartDropdown />}
    </>
  );
};

export default CartContainer;
