import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "https://shop.hansalim.or.kr/im/is/activeDesigner/100101004_content1.jpg",
  },
  {
    name: "Camera",
    image:
      "https://mblogthumb-phinf.pstatic.net/20160710_288/fmamlove_1468129860896x88U9_PNG/5dmark4.png?type=w800",
  },
  {
    name: "MacBook",
    image:
      "https://www.techadvisor.com/cmsdata/features/3802413/new-apple-macbook-air-2021-release-date-price-spec-rumours-main_thumb1200_16-9.png",
  },
  {
    name: "IMac",
    image:
      "https://www.apple.com/newsroom/images/product/imac/standard/apple_new-imac-spring21_hero_04202021_Full-Bleed-Image.jpg.large.jpg",
  },
];

function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
