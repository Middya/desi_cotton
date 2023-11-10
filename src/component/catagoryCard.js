import React from "react";
import "./catagoryCard.css";
import Image from "next/image";
const CatagoryCard = ({ item }) => {
  return (
    <div className="catagoryCard">
      <Image
        src={item.image}
        fill
        sizes="100vw"
        // Make the image display full width
        style={{
          objectFit: "cover",
          objectPosition: "1% 1%",
        }}
      ></Image>
      <div className="catagoryCard_overlay">
        <p>{item.catagory}</p>
      </div>
    </div>
  );
};

export default CatagoryCard;
