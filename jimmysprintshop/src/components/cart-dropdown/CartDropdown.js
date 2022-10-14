import { useContext } from "react";
import { cartContext } from "../../contexts/cart-context-provider";
import { useNavigate } from "react-router-dom";
import { useOutsideClick } from "../../utils/customHooks/useOutsideClick";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./cart-dropdown.styles.scss";
const CartDropdown = () => {
  const { setShowCart, cartItems } = useContext(cartContext);
  const ref = useOutsideClick(() => setShowCart(false));
  const navigate = useNavigate();
  const handleGoToCheckout = () => {
    navigate("/checkout");
    setShowCart(false);
  };
  return (
    <div className="cart-dropdown-container" ref={ref}>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleGoToCheckout}>Check Out</Button>
    </div>
  );
};

export default CartDropdown;
