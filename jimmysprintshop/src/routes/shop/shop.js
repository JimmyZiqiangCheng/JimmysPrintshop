import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/Categories/categories-action";
import { getCategoriesData } from "../../service/database/firebase-store";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMapAsync = async () => {
      const categories = await getCategoriesData("categories");
      dispatch(setCategories(categories));
    };
    getCategoriesMapAsync();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
