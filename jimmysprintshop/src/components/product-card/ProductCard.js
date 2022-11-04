import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/Cart/cart-action";
import { selectCartItems } from "../../store/Cart/cart-selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import {
  ProductCardContainer,
  ImageContainer,
  Footer,
} from "./product-card.styles.js";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const handleClick = () => {
    dispatch(addItem(cartItems, product));
  };
  return (
    <ProductCardContainer>
      <ImageContainer>
        <img src={product.imageUrl} alt={product.name} />
      </ImageContainer>
      <Button buttonType={BUTTON_TYPE_CLASSES.white} onClick={handleClick}>
        Add to Cart
      </Button>
      <Footer>
        <span className="name">{product.name}</span>
        <span className="price">${product.price}</span>
      </Footer>
    </ProductCardContainer>
  );
};

export default ProductCard;
