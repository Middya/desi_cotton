"use client";
import React from "react";
import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slider.css";
import { useState } from "react";
import Image from "next/image";
const Slider = ({ newDresses }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <Swiper
      modules={[Virtual, Navigation]}
      onSwiper={setSwiperRef}
      initialSlide={2}
      slidesPerView={6}
      centeredSlides={true}
      spaceBetween={30}
      navigation={true}
      virtual
    >
      {newDresses.map((newDress, index) => (
        <SwiperSlide
          key={newDress}
          virtualIndex={index}
          className="swiper_slider"
        >
          <div className="style_slide">
            <Image
              alt="product image"
              src={newDress.image}
              fill={true}
              className={"image"}
              sizes=" "
            ></Image>
          </div>
          <div className="product-descripthion">{newDress.description}</div>
          <div className="product-price">
            <p>{`₹ ${newDress.price}`}</p>
            <p>{`₹ ${newDress.discounted_price}`}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
