import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/Categories/categories-selector";
import Spinner from "../../components/spinner/Spinner";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const isLoading = useSelector(selectCategoriesIsLoading);
  const categories = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <div className="category-title">{category.toUpperCase()}</div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products
            ? products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : null}
        </div>
      )}
    </>
  );
};

export default Category;
