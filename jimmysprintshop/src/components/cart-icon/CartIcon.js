import { useDispatch, useSelector } from "react-redux";
import { toggleShowCart } from "../../store/Cart/cart-action";
import {
  selectCartCount,
  selectShowCart,
} from "../../store/Cart/cart-selector";
import {
  CartIconContainer,
  CartSVG,
  ItemCountContainer,
} from "./cart-icon.styles";
const CartIcon = () => {
  const dispatch = useDispatch();
  const showCart = useSelector(selectShowCart);
  const cartCount = useSelector(selectCartCount);
  const handleClick = () => dispatch(toggleShowCart(!showCart));

  return (
    <CartIconContainer onClick={handleClick}>
      <CartSVG />
      <ItemCountContainer>{cartCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
