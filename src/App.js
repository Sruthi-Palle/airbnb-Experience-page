import "./App.css";
import { Navbar } from "./components/Navbar/index";
import { Imagescard } from "./components/ImageCard/index";
import { Cards } from "./components/cards/index.js";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const imageData = [
  {
    firstImage:
      "https://a0.muscache.com/im/pictures/793912a7-3400-4df0-a510-c194f0270df9.jpg?im_w=720",
    firstHeading: "Most Popular around the world",
    button: "Showall",
  },
  {
    firstImage:
      "https://a0.muscache.com/im/pictures/ae692498-89aa-4c1b-a071-f9196ff3cefd.jpg?im_w=720",
    firstHeading: "Great for team building",
    button: "Show all",
  },
  {
    firstImage:
      "https://a0.muscache.com/im/pictures/90b29031-41b0-4cff-a05d-d199387d5c35.jpg?im_w=720",
    firstHeading: "Good work environment",
    button: "show all",
  },
];
const cardsData = [
  {
    id: 1,
    name: "Pasta with the Grandmas",
    description: "Learn how to make pasta from the best in the business",
    price: 2694,
    image:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-active_media/original/1a9f2a4a-e613-4dfe-b871-1a2ec4841f04.jpg?im_w=320",
    location: "Italy",
    reviews: 4.98,
    reviews_count: 3327,
  },
  {
    id: 2,
    name: " 'No Spain no Game' The Fabulous Game",
    description: "Learn how to play the game of the century",
    price: 1307,
    image:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/ca228931-6da0-4f13-96ec-a4079eaeb6c1.jpg?im_w=320",
    location: "Spain",
    reviews: 4.91,
    reviews_count: 2596,
  },
  {
    id: 3,
    name: "Origami and the Essence of Japan",
    description: "Learn how to make deals like a pro",
    price: 1307,
    image:
      "https://a0.muscache.com/im/pictures/5fbe285c-6649-4215-a4d3-d4972bd75b7b.jpg?im_w=320",
    location: "New York, USA",
    reviews: 4.97,
    reviews_count: 488,
  },
  {
    id: 4,
    name: "Origami and the Essence of Japan",
    description: "Learn how to make origami like a pro",
    price: 1307,
    image:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2340325-media_library/original/599c584e-f401-4f67-958a-18277ee7dd10.png?im_w=320",
    location: "Japan",
    reviews: 4.97,
    reviews_count: 488,
  },
  {
    id: 5,
    name: "Pasta with the Grandmas",
    description: "Learn how to make pasta from the best in the business",
    price: 2694,
    image:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-active_media/original/1a9f2a4a-e613-4dfe-b871-1a2ec4841f04.jpg?im_w=320",
    location: "Italy",
    reviews: 4.98,
    reviews_count: 3327,
  },
  {
    id: 6,
    name: " 'No Spain no Game' The Fabulous Game",
    description: "Learn how to play the game of the century",
    price: 1307,
    image:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/ca228931-6da0-4f13-96ec-a4079eaeb6c1.jpg?im_w=320",
    location: "Spain",
    reviews: 4.91,
    reviews_count: 2596,
  },
  {
    id: 7,
    name: "Origami and the Essence of Japan",
    description: "Learn how to make deals like a pro",
    price: 1307,
    image:
      "https://a0.muscache.com/im/pictures/5fbe285c-6649-4215-a4d3-d4972bd75b7b.jpg?im_w=320",
    location: "New York, USA",
    reviews: 4.97,
    reviews_count: 488,
  },
  {
    id: 8,
    name: "Origami and the Essence of Japan",
    description: "Learn how to make origami like a pro",
    price: 1307,
    image:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2340325-media_library/original/599c584e-f401-4f67-958a-18277ee7dd10.png?im_w=320",
    location: "Japan",
    reviews: 4.97,
    reviews_count: 488,
  },
  {
    id: 9,
    name: "Pasta with the Grandmas",
    description: "Learn how to make pasta from the best in the business",
    price: 2694,
    image:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-active_media/original/1a9f2a4a-e613-4dfe-b871-1a2ec4841f04.jpg?im_w=320",
    location: "Italy",
    reviews: 4.98,
    reviews_count: 3327,
  },
  {
    id: 10,
    name: " 'No Spain no Game' The Fabulous Game",
    description: "Learn how to play the game of the century",
    price: 1307,
    image:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/ca228931-6da0-4f13-96ec-a4079eaeb6c1.jpg?im_w=320",
    location: "Spain",
    reviews: 4.91,
    reviews_count: 2596,
  },
  {
    id: 11,
    name: "Origami and the Essence of Japan",
    description: "Learn how to make deals like a pro",
    price: 1307,
    image:
      "https://a0.muscache.com/im/pictures/5fbe285c-6649-4215-a4d3-d4972bd75b7b.jpg?im_w=320",
    location: "New York, USA",
    reviews: 4.97,
    reviews_count: 488,
  },
  {
    id: 12,
    name: "Origami and the Essence of Japan",
    description: "Learn how to make origami like a pro",
    price: 1307,
    image:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2340325-media_library/original/599c584e-f401-4f67-958a-18277ee7dd10.png?im_w=320",
    location: "Japan",
    reviews: 4.97,
    reviews_count: 488,
  },
];

function App() {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const settings2 = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div style={{ marginLeft: "20px" }}>
      <Navbar />
      <h1>New this week</h1>
      <Slider {...settings2}>
        {imageData.map((each) => (
          <Imagescard imagedata={each} />
        ))}
      </Slider>

      <h1>Top Sellers</h1>
      <Slider {...settings}>
        {cardsData.map((each) => (
          <Cards cardData={each} />
        ))}
      </Slider>
    </div>
  );
}

export default App;
