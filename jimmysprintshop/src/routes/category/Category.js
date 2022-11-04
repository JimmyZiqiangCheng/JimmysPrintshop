import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/ProductCard";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/Categories/categories-selector";
import SearchBar from "../../components/search-bar/SearchBar";
import Spinner from "../../components/spinner/Spinner";
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer,
} from "./category.styles.js";
import { debounce } from "../../utils/customFunctions/debounce";

const Category = () => {
  const { category } = useParams();
  const isLoading = useSelector(selectCategoriesIsLoading);
  const categories = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categories[category]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  useEffect(() => {
    const filteredProducts = products
      ? products.filter((p) => p.name.toLowerCase().includes(searchTerm))
      : null;
    setFilteredProducts(filteredProducts);
  }, [searchTerm, products]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const debouncedHandleSearch = debounce(handleSearch, 0.3);

  return (
    <CategoryContainer>
      <CategoryTitle>
        {category.toUpperCase().replaceAll("_", " ")}
      </CategoryTitle>
      <SearchBar
        placeholder="search here ..."
        className="search-products"
        onSearchChange={debouncedHandleSearch}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductsContainer>
          {filteredProducts
            ? filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : null}
        </ProductsContainer>
      )}
    </CategoryContainer>
  );
};

export default Category;
