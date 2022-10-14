import { useContext } from "react";
import { cartContext } from "../../contexts/cart-context-provider";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { addItem, reduceItem, removeItem } = useContext(cartContext);
  const handleIncrease = () => addItem(cartItem);
  const handleDecrease = () => reduceItem(cartItem);
  const handleRemove = () => removeItem(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecrease}>
          &#60;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={handleIncrease}>
          &#62;
        </div>
      </span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={handleRemove}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
