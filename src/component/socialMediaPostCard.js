import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./socialMediaPostCard.css";
export const SocialMediaPostCard = ({ item }) => {
  return (
    <div className="socialMediaPostCard">
      <Image
        src={item.image}
        alt="social media post card image"
        width="220"
        height="150"
        style={{
          objectFit: "cover",
          objectPosition: "1% 1%",
        }}
      ></Image>
      <div className="description">
        A Deep Dive into the World of Indian Lehengas
      </div>
      <div className="socialLink">
        <Link href={"/"}>
          <Image
            src={"/facebook_logo.png"}
            alt="facebook logo"
            width="22"
            height="22"
          ></Image>
        </Link>
        <Link href={"/"}>
          <Image
            src={"/instagram_logo.png"}
            alt="instagram logo"
            width="22"
            height="22"
          ></Image>
        </Link>
        <Link href={"/"}>
          <Image src={"/twitterX.png"} width="22" height="22"></Image>
        </Link>
      </div>
    </div>
  );
};
