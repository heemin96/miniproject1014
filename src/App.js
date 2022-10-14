import MainPage from "./pages/MainPage";
import Horizontalpage2 from "./pages/Horizontalpage2";
import Horizontalpage3 from "./pages/Horizontalpage3";
import Verticalpage2 from "./pages/Verticalpage2";
import Verticalpage3 from "./pages/Verticalpage3";
import Verticalpage4 from "./pages/Verticalpage4";


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper React components

import { Mousewheel, Keyboard } from "swiper";
// Import Swiper styles


import "./App.css";



export default function App() {
  return (
    <>
          <Swiper
            direction={"vertical"}
            mousewheel // 마우스 휠 동작을 허용합니다.
            keyboard // 키보드 방향키에 의한 동작을 허용합니다.
            modules={[ Mousewheel, Keyboard]} // 마우스휠, 키보드 등을 사용하려면 모듈을 import해줘야 합니다.
            autoHeight
            slidesPerView={1}
            speed={500} // 슬라이드가 넘어가는 속도를 조정합니다. 단위는 ms입니다.
           
          >
       
           <SwiperSlide>

            <Swiper      
              slidesPerView={1}
              mousewheel // 마우스 휠 동작을 허용합니다.
              keyboard // 키보드 방향키에 의한 동작을 허용합니다.
              modules={[ Mousewheel, Keyboard]} // 마우스휠, 키보드 등을 사용하려면 모듈을 import해줘야 합니다.
              // allowTouchMove // 터치 동작을 허용합니다.
              // threshold={20} // 터치 감도를 조정합니다. 숫자가 클수록 터치에 반응하지 않습니다.       
              speed={1000} // 슬라이드가 넘어가는 속도를 조정합니다. 단위는 ms입니다.
          >
                <SwiperSlide ><MainPage/></SwiperSlide>
                <SwiperSlide ><Horizontalpage2/></SwiperSlide>
                <SwiperSlide ><Horizontalpage3/></SwiperSlide>
            
            </Swiper>
              </SwiperSlide>
                <SwiperSlide><Verticalpage2/></SwiperSlide>
                <SwiperSlide><Verticalpage3/></SwiperSlide>
                <SwiperSlide><Verticalpage4/></SwiperSlide>
        </Swiper>
      </>
    );
  }