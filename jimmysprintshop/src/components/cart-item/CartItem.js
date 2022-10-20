import { useContext } from "react";
import { cartContext } from "../../contexts/cart-context-provider";
import {
  CartItemContainer,
  ItemImage,
  ItemDetails,
  AdjustButton,
} from "./cart-item.styles";

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
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="item-name">{name}</span>
        <span className="item-price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
      <AdjustButton onClick={handleDecrease}>&#65293;</AdjustButton>
      <AdjustButton onClick={handleIncrease}>&#65291;</AdjustButton>
    </CartItemContainer>
  );
};

export default CartItem;
