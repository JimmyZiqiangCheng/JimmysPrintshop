import "./directory-card.styles.scss";

const DirectoryCard = ({ title, url }) => {
  return (
    <div className="directory-card-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${url})` }}
      />
      <div className="directory-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryCard;
