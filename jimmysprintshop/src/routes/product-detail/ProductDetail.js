import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { addItem } from "../../store/cart-slice";
import { selectCartItems } from "../../store/cart-slice";
import { selectCategoriesMap } from "../../store/categories-slice";
import {
  ImageContainer,
  ImageInfoContainer,
  ProductDetailContainer,
  AddToCartButton,
  SelectOption,
  SelectedOptions,
} from "./prodcut-detail.styles";

const PRINT_OPTIONS = {
  small: {
    size: "5 by 7",
    price: 20,
  },
  medium: {
    size: "8 by 10",
    price: 35,
  },
  large: {
    size: "16 by 20",
    price: 80,
  },
};

const SELECT_OPTION = [
  { id: 1, value: "small" },
  { id: 2, value: "medium" },
  { id: 3, value: "large" },
];

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { category, productId } = useParams();
  const categories = useSelector(selectCategoriesMap);
  const cartItems = useSelector(selectCartItems);
  const [product, setProduct] = useState(null);
  const [option, setOption] = useState("small");

  const getProduct = (categories, category, productId) => {
    const product = categories[category]
      ? categories[category].find((item) => item.id === parseInt(productId))
      : null;
    return product;
  };

  useEffect(() => {
    setProduct(getProduct(categories, category, productId));
  }, [productId, category, categories]);

  const handleClick = () => {
    dispatch(
      addItem([...cartItems], product, option, PRINT_OPTIONS[option].price)
    );
  };

  const handleSelect = (event) => {
    setOption(event.target.value);
  };

  return (
    <>
      {product ? (
        <ProductDetailContainer>
          <ImageContainer>
            <img src={product.imageUrl} alt={product.name} />
          </ImageContainer>
          <ImageInfoContainer>
            <h2> {product.name}</h2>
            <SelectOption>
              <p>size options: </p>
              <select value={option} onChange={handleSelect}>
                {SELECT_OPTION.map((option) => (
                  <option key={option.id} value={option.value}>
                    {`${option.value} - ${
                      PRINT_OPTIONS[option.value].size
                    } - $${PRINT_OPTIONS[option.value].price} USD`}
                  </option>
                ))}
              </select>
            </SelectOption>
            <SelectedOptions>
              <div>size: {PRINT_OPTIONS[option].size}</div>
              <div>price: ${PRINT_OPTIONS[option].price}</div>
            </SelectedOptions>
            <AddToCartButton onClick={handleClick}>Add To Cart</AddToCartButton>
          </ImageInfoContainer>
        </ProductDetailContainer>
      ) : null}
    </>
  );
};

export default ProductDetail;
