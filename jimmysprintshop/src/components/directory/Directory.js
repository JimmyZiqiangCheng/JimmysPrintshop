import DirectoryCard from "../directory-card/DirectoryCard";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ title, url }, i) => (
        <DirectoryCard title={title} url={url} key={i} />
      ))}
    </div>
  );
};

export default Directory;
