import { useNavigate } from "react-router-dom";
import {
  DirectoryCardContainer,
  BackgroundImage,
  BodyContainer,
} from "./directory-card.styles";

const DirectoryCard = ({ title, url }) => {
  const navigate = useNavigate();
  const handleDirectoryNavigate = () => {
    navigate(url);
  };
  return (
    <DirectoryCardContainer onClick={handleDirectoryNavigate}>
      <BackgroundImage imageUrl={url} />
      <BodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </BodyContainer>
    </DirectoryCardContainer>
  );
};

export default DirectoryCard;
