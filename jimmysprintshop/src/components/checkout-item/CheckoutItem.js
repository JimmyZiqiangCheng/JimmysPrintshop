import { useContext } from "react";
import { cartContext } from "../../contexts/cart-context-provider";
import {
  CheckoutItemContainer,
  QuantityContainer,
  RemoveButton,
  ImageContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { addItem, reduceItem, removeItem } = useContext(cartContext);
  const handleIncrease = () => addItem(cartItem);
  const handleDecrease = () => reduceItem(cartItem);
  const handleRemove = () => removeItem(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={cartItem.imageUrl} alt={cartItem.name} />
      </ImageContainer>
      <span className="name">{cartItem.name}</span>
      <QuantityContainer>
        <div className="arrow" onClick={handleDecrease}>
          &#60;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={handleIncrease}>
          &#62;
        </div>
      </QuantityContainer>
      <span className="price">{cartItem.price}</span>
      <RemoveButton onClick={handleRemove}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
