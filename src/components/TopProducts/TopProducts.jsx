import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* Header Section */}
        <div>
          <div className="text-left mb-10">
            <p className="text-sm text-primary" data-aos="fade-up">
              Top Rated Products for you
            </p>
            <h1 className="text-3xl font-bold" data-aos="fade-up">
              Best Products
            </h1>
            <p className="text-xs text-gray-400" data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aspernatur elit. Fugit, aspernatur
            </p>
          </div>
        </div>
        {/* Body Section */}
        <div>
          {ProductsData.map((data) => (
            <div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
