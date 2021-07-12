import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import './style.scss';

import img from "./images/carrousel.png";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Carrousel() {
  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true} 
        //autoplay={{ delay: 5000, disableOnInteraction: false, }} 
        pagination={{ clickable: true, }} 
        navigation={false}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="content-image">
            <div className="legend">
              <img src={img} alt="Imagem carousel" width={"65%"} />
              <h2>Marcenas mattis egestas</h2>
              <p>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><img src={img} alt="Imagem carousel" width={"80%"} /></SwiperSlide>
        <SwiperSlide><img src={img} alt="Imagem carousel" width={"80%"} /></SwiperSlide>
      </Swiper>
    </div>
  );
}
