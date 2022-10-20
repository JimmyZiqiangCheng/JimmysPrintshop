import DirectoryCard from "../directory-card/DirectoryCard";
import { DirectoryContainer } from "./directory.styles";
const CATEGORIES = [
  {
    id: 1,
    title: "Near the Mountain",
    url: "https://i.ibb.co/MhjggyW/Banff-night.jpg",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "By the Sea",
    url: "https://i.ibb.co/x8pjg53/50962270216-0619b828d7-o.jpg",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Light Seeker",
    url: "https://i.ibb.co/BnvJ3PS/light-seeker.jpg",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Hustle and Bustle",
    url: "https://i.ibb.co/xGLNvR4/2022-8-05-P400-39.jpg",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Time Travel",
    url: "https://i.ibb.co/FxxNKtT/DSC0701.jpg",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {CATEGORIES.map(({ title, url, id }) => (
        <DirectoryCard title={title} url={url} key={id} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
