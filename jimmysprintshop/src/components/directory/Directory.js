import CategoryCard from "../category-card/CategoryCard";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ title, url }, i) => (
        <CategoryCard title={title} url={url} key={i} />
      ))}
    </div>
  );
};

export default Directory;
