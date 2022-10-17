import { useState, createContext, useEffect } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesMap,
} from "../service/database/firebase-store";
import SHOP_DATA from "../shop-data";
export const categoriesContext = createContext({
  products: [],
  setProducts: () => {},
});
export const CategoriesProvider = ({ children }) => {
  // one-off add data
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);
  useEffect(() => {
    const getCategoriesMapAsync = async () => {
      const categoriesMap = await getCategoriesMap("categories");
      setCategories(categoriesMap);
    };
    getCategoriesMapAsync();
  }, []);
  const [categories, setCategories] = useState({});
  return (
    <categoriesContext.Provider value={{ categories }}>
      {children}
    </categoriesContext.Provider>
  );
};
