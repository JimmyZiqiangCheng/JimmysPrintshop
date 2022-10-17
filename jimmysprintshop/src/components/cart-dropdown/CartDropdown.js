import { useContext } from "react";
import { cartContext } from "../../contexts/cart-context-provider";
import { useNavigate } from "react-router-dom";
import { useOutsideClick } from "../../utils/customHooks/useOutsideClick";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  TotalItem,
} from "./cart-dropdown.styles";
const CartDropdown = () => {
  const { setShowCart, cartItems, cartTotal } = useContext(cartContext);
  const ref = useOutsideClick(() => setShowCart(false));
  const navigate = useNavigate();
  const handleGoToCheckout = () => {
    navigate("/checkout");
    setShowCart(false);
  };
  return (
    <CartDropdownContainer ref={ref}>
      <TotalItem>Total: ${cartTotal}</TotalItem>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleGoToCheckout}>Check Out</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
