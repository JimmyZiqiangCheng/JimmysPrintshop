import logo from "./logo.svg";
import "./App.css";
import Directory from "./components/directory/Directory";

function App() {
  const categories = [
    {
      title: "Near the Mountain",
      url: "https://i.ibb.co/MhjggyW/Banff-night.jpg",
    },
    {
      title: "By the Sea",
      url: "https://i.ibb.co/x8pjg53/50962270216-0619b828d7-o.jpg",
    },
    {
      title: "Light Seeker",
      url: "https://i.ibb.co/BnvJ3PS/light-seeker.jpg",
    },
    {
      title: "Hustle and Bustle",
      url: "https://i.ibb.co/xGLNvR4/2022-8-05-P400-39.jpg",
    },
    { title: "Time Travel", url: "https://i.ibb.co/FxxNKtT/DSC0701.jpg" },
  ];
  return <Directory categories={categories} />;
}

export default App;
