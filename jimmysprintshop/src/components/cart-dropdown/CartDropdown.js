import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/Cart/cart-selector";
import { toggleShowCart } from "../../store/Cart/cart-action";
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
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const ref = useOutsideClick(() => dispatch(toggleShowCart(false)));
  const navigate = useNavigate();
  const handleGoToCheckout = () => {
    navigate("/checkout");
    dispatch(toggleShowCart(false));
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
