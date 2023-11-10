"use client";
import Image from "next/image";
import Slider from "@/component/slider/slider";
import Link from "next/link";
import { useState } from "react";
import { BestSellingCard } from "@/component/bestSellingCard";
import { SocialMediaPostCard } from "@/component/socialMediaPostCard";
import FeatureCard from "@/component/featureCard";
import CatagoryCard from "@/component/catagoryCard";
import About from "@/component/about/about";
export default function Home() {
  const [newDresses, setNewDresses] = useState([
    {
      image: "/new_dress_1.png",
      description: "Shop the Latest Western Tops Online",
      price: "1500",
      discounted_price: "1000",
    },
    {
      image: "/new_dress_2.png",
      description: "Shop the Latest Western Tops Online",
      price: "1500",
      discounted_price: "1000",
    },
    {
      image: "/new_dress_3.png",
      description: "Shop the Latest Western Tops Online",
      price: "1500",
      discounted_price: "1000",
    },
    {
      image: "/new_dress_4.png",
      description: "Shop the Latest Western Tops Online",
      price: "1500",
      discounted_price: "1000",
    },
    {
      image: "/new_dress_5.png",
      description: "Shop the Latest Western Tops Online",
      price: "1500",
      discounted_price: "1000",
    },
    ,
    {
      image: "/new_dress_2.png",
      description: "Shop the Latest Western Tops Online",
      price: "1500",
      discounted_price: "1000",
    },
    {
      image: "/new_dress_3.png",
      description: "Shop the Latest Western Tops Online",
      price: "1500",
      discounted_price: "1000",
    },
    {
      image: "/new_dress_4.png",
      description: "Shop the Latest Western Tops Online",
      price: "1500",
      discounted_price: "1000",
    },
    {
      image: "/new_dress_5.png",
      description: "Shop the Latest Western Tops Online",
      price: "1500",
      discounted_price: "1000",
    },
    {
      image: "/best_selling_1.png",
      description: "Shop the Latest Western Tops Online",
      price: "1500",
      discounted_price: "1000",
    },
  ]);
  return (
    <main>
      <div className="home">
        <Link className={"image-container"} href={"/features_1"}>
          <Image
            src="/features_1.png"
            fill={true}
            alt="ALT_TEXT"
            className={"image"}
            sizes=" "
            priority={true}
          />
        </Link>
        <div className="new_dress_this_month">
          <p>new dress this month</p>
          <Slider newDresses={newDresses}></Slider>
        </div>
        <div className="best_selling_dress_categories">
          <p>Best selling Dress Categories</p>
          <div className="bestSellingCards">
            {newDresses.slice(0, 4).map((item) => {
              return <BestSellingCard item={item}></BestSellingCard>;
            })}
          </div>
        </div>
        <div className="review">
          <div className="social_media_post">
            <div className="social_media_post_title">Social Media Post</div>
            <div className="social_media_post_cards">
              {newDresses.slice(8, 11).map((item) => {
                return <SocialMediaPostCard item={item}></SocialMediaPostCard>;
              })}
            </div>
            <button className="social_media_post_viewAll_btn">view all</button>
          </div>
          <div className="customer_review">
            <div className="customer_review_title">Customer review</div>
            <Image
              src={"/backtick_left.png"}
              className="left_backtick"
              width="52"
              height="52"
              alt="left backtick"
            ></Image>
            <div className="customer_review_text">
              This online shop exceeded my expectations with its wide selection
              and prompt delivery. I'm a satisfied customer and will definitely
              shop here again!
            </div>
            <Image
              src={"/backtick_right.png"}
              className="right_backtick"
              width="52"
              height="52"
              alt="right_backtick"
            ></Image>
            <div className="stars">
              {newDresses.slice(1, 6).map((i) => {
                return (
                  <Image width="23" height="23" src={"/star_1.png"}></Image>
                );
              })}
            </div>
            <p>Jahan arbi</p>
            <p>Delhi</p>
            <p>12/09/2023</p>
            <button className="customer_review_viewAll_btn">view all</button>
          </div>
        </div>
        <div className="feature_cards">
          {newDresses.slice(0, 3).map((item) => {
            return <FeatureCard item={item} />;
          })}
        </div>
        <div className="subcribe">
          <div className="subcribe_img">
            <Image
              src="/sub_image.png"
              fill
              sizes="100vw"
              // Make the image display full width
              style={{
                objectFit: "cover",
              }}
            ></Image>
          </div>
          <div className="subcribe_detail">
            <p>The Timeless Elegance of Traditional Indian Attire</p>
            <p>
              Stay In the Loop: Subscribe to Our Newsletter for Exclusive
              Updates and Offers!"Unlock a World of Information and Deals –
              Subscribe to Our Newsletter Today!
            </p>
            <button className="social_media_post_viewAll_btn">Subscribe</button>
          </div>
        </div>
        <div className="gift_follow">
          <div className="gift">
            <Image
              src={"/gift.png"}
              fill
              sizes="100vw"
              // Make the image display full width
              style={{
                objectFit: "cover",
                objectPosition: "1% 1%",
              }}
            ></Image>
            <div className="gift_overlay">
              <div className="gift_title">
                Gift someone Special through our gift card
              </div>
            </div>
          </div>
          <div className="follow">
            <Image
              src={"/new_dress_5.png"}
              fill
              sizes="100vw"
              // Make the image display full width
              style={{
                objectFit: "cover",
                objectPosition: "1% 1%",
              }}
            ></Image>
            <div className="follow_overlay">
              <div className="follow_title">Follow us instagram, facebook </div>
              <div className="buttons">
                <Link className="follow_btn" href={"/follow_instagram_link"}>
                  <Image src={"/instagram.png"} width={24} height={24}></Image>
                  <p>follow Instagram</p>
                </Link>
                <Link className="follow_btn" href={"/follow_facebook_link"}>
                  <Image src={"/facebook.png"} width={11} height={20}></Image>
                  <p>Follow Facebook</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="feature_cards">
          {newDresses.slice(5, 10).map((item) => {
            return <CatagoryCard item={item} />;
          })}
        </div>
        <About></About>
      </div>
    </main>
  );
}
