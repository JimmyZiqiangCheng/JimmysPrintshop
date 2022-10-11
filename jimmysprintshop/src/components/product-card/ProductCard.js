import Button from "../button/Button";
import "./product-card.styles.scss";
const ProductCard = ({ product }) => {
  return (
    <div className="product-card-container">
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <Button buttonType="white">Add to Cart</Button>
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;