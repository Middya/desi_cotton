import React from "react";
import Image from "next/image";
import "./bestSellingCard.css";
export const BestSellingCard = ({ data }) => {
  return (
    <div className="bestSellingCard">
      <Image
        src={"/best_selling_1.png"}
        fill
        sizes="100vw"
        // Make the image display full width
        style={{
          objectFit: "cover",
          objectPosition: "1% 1%",
        }}
      ></Image>
      <div className="overlay">
        <p>Bell-buttoms</p>
      </div>
    </div>
  );
};
