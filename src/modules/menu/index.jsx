import React from "react";
import Menu from "./menu";

const items = [
  {
    title: "Home",
  },
  {
    title: "Products",
    children: [
      {
        title: "Shoes",
        children: [
          {
            title: "Running Shoes",
          },
          {
            title: "Walking Shoes",
          },
        ],
      },
      {
        title: "Clothing",
      },
    ],
  },
  {
    title: "Contact Us",
  },
];

const App = () => {
  return <Menu items={items} />;
};

export default App;
