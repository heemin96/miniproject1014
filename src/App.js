import MainPage from "./pages/MainPage";
import Horizontalpage2 from "./pages/Horizontalpage2";
import Horizontalpage3 from "./pages/Horizontalpage3";

import Verticalpage2 from "./pages/Verticalpage2";
import Verticalpage3 from "./pages/Verticalpage3";
import Verticalpage4 from "./pages/Verticalpage4";

import { useCallback } from "react";
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper React components

import{ Mousewheel, Keyboard } from "swiper";

// Import css
import Appbutton from "./ui/Appbutton";
import MainAppbutton from "./ui/MainAppbutton";
import "./App.css";



export default function App() {

  const [swiper, setSwiper] = useState();

  const component1Click=()=>{
    // component1.current.scrollIntoView({ behavior:'smooth'})
    swiper.slideTo(1);
  };

  const component2Click=()=>{
    swiper.slideTo(2);
  };

  const component3Click=()=>{
    swiper.slideTo(3);
  };

  return (
    <div>
        <Swiper
            slidesPerView={1} 
            direction={"vertical"}
            mousewheel 
            keyboard 
            modules={[ Mousewheel, Keyboard]} 
            speed={500} 
            onSwiper={(swiper)=> setSwiper(swiper)}
            allowTouchMove={"false"}
            touchRatio={0}    
          >
           <SwiperSlide>

            <Swiper      
              slidesPerView={1}           
              keyboard 
              modules={[ Mousewheel, Keyboard]} 
              speed={500} 
              allowTouchMove={"false"}    
              touchRatio={0}           
             >
                <SwiperSlide > 
                  <MainAppbutton onClick={component1Click}>1</MainAppbutton>
                  <MainAppbutton onClick={component2Click}>2</MainAppbutton>
                  <MainAppbutton onClick={component3Click}>3</MainAppbutton>             
                 </SwiperSlide>
                
                <SwiperSlide><Horizontalpage2/></SwiperSlide>
                <SwiperSlide><Horizontalpage3/></SwiperSlide>
                
            </Swiper>

          </SwiperSlide>
                <SwiperSlide><Verticalpage2/></SwiperSlide>
                <SwiperSlide><Verticalpage3/></SwiperSlide>
                <SwiperSlide><Verticalpage4/></SwiperSlide>            
        </Swiper>
    </div>
    );
  }

  

 
 
 
 
 
 
 
 
 
 
 
  // const component1 = useRef(null);
  // const component2 = useRef(null);
  // const component3 = useRef(null);
 
 
 
  //   const handleScroll = useCallback((num) => {
//    switch(num) {
//      case 1: 
//        if(component1.current)
//          component1.current.scrollIntoView({ behavior:'smooth'});
//          break;
//         default:
//      case 2:
//        if(component2.current) {
//           window.scrollTo(0, component2.current.getBoundingClientReact().y);
//        }
//          break;
       

//      case 3:
//        if(component3.current) 
//          component3.current.scrollIntoView({ behavior:'smooth'});
//          break;
               
//         }
            
//  }, []);



// direction={"vertical"}
// mousewheel // 마우스 휠 동작을 허용합니다.
// keyboard // 키보드 방향키에 의한 동작을 허용합니다.
// modules={[ Mousewheel, Keyboard]} // 마우스휠, 키보드 등을 사용하려면 모듈을 import해줘야 합니다.
// slidesPerView={"auto"} // 화면에 보여주는 슬라이드 갯수입니다.
// speed={500} // 슬라이드가 넘어가는 속도를 조정합니다. 단위는 ms입니다.
// onSwiper={(swiper)=> setSwiper(swiper)}
// allowTouchMove={"false"}
// touchRatio={0} // 터치 금지
// // threshold={20} // 터치 감도를 조정합니다. 숫자가 클수록 터치에 반응하지 않습니다.      