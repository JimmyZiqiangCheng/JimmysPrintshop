import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleShowCart } from "../../store/Cart/cart-action";
import {
  selectCartCount,
  selectShowCart,
} from "../../store/Cart/cart-selector";
import { selectCurrentUser } from "../../store/User/user-selector";
import {
  CartIconContainer,
  CartSVG,
  ItemCountContainer,
} from "./cart-icon.styles";
const CartIcon = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const showCart = useSelector(selectShowCart);
  const cartCount = useSelector(selectCartCount);
  const handleClick = () => {
    if (!currentUser) return navigate("auth");
    dispatch(toggleShowCart(!showCart));
  };

  return (
    <CartIconContainer onClick={handleClick}>
      <CartSVG />
      <ItemCountContainer>{cartCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
