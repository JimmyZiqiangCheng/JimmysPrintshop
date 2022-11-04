import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/CategoryPreview";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/Categories/categories-selector";
import Spinner from "../../components/spinner/Spinner";
const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) => {
          const products = categories[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
