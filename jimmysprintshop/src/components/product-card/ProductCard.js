import { useNavigate } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import { ProductCardContainer, ImageContainer } from "./product-card.styles.js";

const ProductCard = ({ product, category }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/shop/${category}/${product.id}`);
  };
  return (
    <ProductCardContainer>
      <ImageContainer>
        <img src={product.imageUrl} alt={product.name} />
      </ImageContainer>
      <Button buttonType={BUTTON_TYPE_CLASSES.white} onClick={handleClick}>
        {product.name}
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
