import DirectoryCard from "../directory-card/DirectoryCard";
import { DirectoryContainer } from "./directory.styles";
const CATEGORIES = [
  {
    id: 1,
    title: "Near Mountain",
    url: "https://i.ibb.co/MhjggyW/Banff-night.jpg",
    route: "shop/near_mountain",
  },
  {
    id: 2,
    title: "By the Sea",
    url: "https://i.ibb.co/x8pjg53/50962270216-0619b828d7-o.jpg",
    route: "shop/by_the_sea",
  },
  {
    id: 3,
    title: "Light Seeker",
    url: "https://i.ibb.co/BnvJ3PS/light-seeker.jpg",
    route: "shop/light_seeker",
  },
  {
    id: 4,
    title: "Hustle and Bustle",
    url: "https://i.ibb.co/xGLNvR4/2022-8-05-P400-39.jpg",
    route: "shop/hustle_and_bustle",
  },
  {
    id: 5,
    title: "Time Travel",
    url: "https://i.ibb.co/FxxNKtT/DSC0701.jpg",
    route: "shop/time_travel",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {CATEGORIES.map((category) => (
        <DirectoryCard category={category} key={category.id} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
