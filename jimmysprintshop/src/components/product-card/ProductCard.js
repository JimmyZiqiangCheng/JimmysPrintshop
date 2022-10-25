import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/Cart/cart-action";
import { selectCartItems } from "../../store/Cart/cart-selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const handleClick = () => {
    dispatch(addItem(cartItems, product));
  };
  return (
    <div className="product-card-container">
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.white} onClick={handleClick}>
        Add to Cart
      </Button>
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
