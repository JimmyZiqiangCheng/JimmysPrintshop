import { useContext } from "react";
import { ReactComponent as Icon } from "../../assets/shopping-bag.svg";
import { cartContext } from "../../contexts/cart-context-provider";
import "./cart-icon.styles.scss";
const CartIcon = () => {
  const { showCart, setShowCart, cartCount } = useContext(cartContext);
  const toggleShowCart = () => setShowCart(!showCart);

  return (
    <div className="cart-icon-container" onClick={toggleShowCart}>
      <Icon className="cart-icon" />
      <div className="item-count">{cartCount}</div>
    </div>
  );
};

export default CartIcon;
