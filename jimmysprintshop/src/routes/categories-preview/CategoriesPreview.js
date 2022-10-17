import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { categoriesContext } from "../../contexts/categories-context-provider";

const CategoriesPreview = () => {
  const { categories } = useContext(categoriesContext);

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
