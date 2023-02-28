import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/KySC3NF/hat.jpg",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/5BSjCby/Jackets.jpg",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/HDJ0F3x/Sneakers.jpg",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "https://i.ibb.co/v3FghrX/women.jpg",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "https://i.ibb.co/SNdzSBs/men.jpg",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
