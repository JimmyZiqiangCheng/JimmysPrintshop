import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import { categoriesContext } from "../../contexts/categories-context-provider";

import "./category.styles.scss";
const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(categoriesContext);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);
  return (
    <>
      <div className="category-title">{category.toUpperCase()}</div>
      <div className="category-container">
        {products
          ? products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : null}
      </div>
    </>
  );
};

export default Category;
