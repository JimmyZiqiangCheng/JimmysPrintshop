import { useDispatch, useSelector } from "react-redux";
import { addItem, reduceItem } from "../../store/Cart/cart-action";
import { selectCartItems } from "../../store/Cart/cart-selector";
import {
  CartItemContainer,
  ItemImage,
  ItemDetails,
  AdjustButton,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const { name, imageUrl, quantity, price } = cartItem;
  const handleDecrease = () => {
    dispatch(reduceItem(cartItems, cartItem));
  };
  const handleIncrease = () => {
    dispatch(addItem(cartItems, cartItem));
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
