import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { selectCategoriesMap } from "../../store/Categories/categories-selector";
const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);
  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
