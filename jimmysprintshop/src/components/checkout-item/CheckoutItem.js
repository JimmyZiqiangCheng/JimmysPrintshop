import { useDispatch, useSelector } from "react-redux";
import { addItem, reduceItem, removeItem } from "../../store/cart-slice";
import { selectCartItems } from "../../store/cart-slice";
import {
  CheckoutItemContainer,
  QuantityContainer,
  RemoveButton,
  ImageContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const handleIncrease = () => dispatch(addItem([...cartItems], cartItem));
  const handleDecrease = () => dispatch(reduceItem([...cartItems], cartItem));
  const handleRemove = () => dispatch(removeItem([...cartItems], cartItem));
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
