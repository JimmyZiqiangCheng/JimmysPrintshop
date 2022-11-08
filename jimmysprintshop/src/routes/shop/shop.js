import { Suspense, useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import { fetchCategoriesAsync } from "../../store/Categories/categories-action";
import { useDispatch } from "react-redux";

const Category = lazy(() => import("../category/Category"));
const ProductDetail = lazy(() => import("../product-detail/ProductDetail"));

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  return (
    <Suspense>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
        <Route path=":category/:productId" element={<ProductDetail />} />
      </Routes>
    </Suspense>
  );
};

export default Shop;
