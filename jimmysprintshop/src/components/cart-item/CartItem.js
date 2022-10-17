import { useContext } from "react";
import { cartContext } from "../../contexts/cart-context-provider";
import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { addItem, reduceItem } = useContext(cartContext);
  const { name, imageUrl, quantity, price } = cartItem;
  const handleDecrease = () => {
    reduceItem(cartItem);
  };
  const handleIncrease = () => {
    addItem(cartItem);
  };
  return (
    <div className="cart-item-container">
      <img className="item-img" src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-price">
          {quantity} x ${price}
        </span>
      </div>
      <div className="adjust-button" onClick={handleDecrease}>
        &#65293;
      </div>
      <div className="adjust-button" onClick={handleIncrease}>
        &#65291;
      </div>
    </div>
  );
};

export default CartItem;
