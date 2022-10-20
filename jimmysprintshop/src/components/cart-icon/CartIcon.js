import { useContext } from "react";
import { cartContext } from "../../contexts/cart-context-provider";
import {
  CartIconContainer,
  CartSVG,
  ItemCountContainer,
} from "./cart-icon.styles";
const CartIcon = () => {
  const { showCart, setShowCart, cartCount } = useContext(cartContext);
  const toggleShowCart = () => setShowCart(!showCart);

  return (
    <CartIconContainer onClick={toggleShowCart}>
      <CartSVG />
      <ItemCountContainer>{cartCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
