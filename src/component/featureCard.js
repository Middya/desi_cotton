import React from "react";
import "./featureCard.css";
import Image from "next/image";
const FeatureCard = ({ item }) => {
  return (
    <div className="featureCard">
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
      <div className="overlay">
        <p>Bell-buttoms</p>
      </div>
    </div>
  );
};

export default FeatureCard;
