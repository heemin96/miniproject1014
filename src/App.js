import "./App.css";
import MainPage from "./pages/MainPage";
import Horizontalpage2 from "./pages/Horizontalpage2";
import Horizontalpage3 from "./pages/Horizontalpage3";
import Horizontalpage4 from "./pages/Horizontalpage4.";
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

import { Mousewheel, Keyboard } from "swiper";
import Appbutton from "./ui/Appbutton";
// Import Swiper styles





export default function App() {

  const component1 = useRef(null);
  const component2 = useRef(null);
  const component3 = useRef(null);


  const component1Click=()=>{
    component1.current.scrollIntoView({ behavior:'smooth'})
  };

  const component2Click=()=>{
    component2.current.scrollIntoView({ behavior:'smooth'})
  };

  const component3Click=()=>{
    component3.current.scrollIntoView({ behavior:'smooth'})
  };

  


  return (
    <div>

          <Swiper
          
            direction={"vertical"}
            mousewheel // 마우스 휠 동작을 허용합니다.
            keyboard // 키보드 방향키에 의한 동작을 허용합니다.
            modules={[ Mousewheel, Keyboard]} // 마우스휠, 키보드 등을 사용하려면 모듈을 import해줘야 합니다.
            slidesPerView={1} // 화면에 보여주는 슬라이드 갯수입니다.
            speed={500} // 슬라이드가 넘어가는 속도를 조정합니다. 단위는 ms입니다.
            observer={"true"}
            resistance={"false"}
         
    
          >
       
           <SwiperSlide>

            <Swiper      
              slidesPerView={1}
              mousewheel 
              keyboard 
              modules={[ Mousewheel, Keyboard]} 
              // allowTouchMove // 터치 동작을 허용합니다.
              // threshold={20} // 터치 감도를 조정합니다. 숫자가 클수록 터치에 반응하지 않습니다.       
              speed={500} 
              observer={"true"}
              resistance={"false"}              
          >
                <SwiperSlide > <Appbutton onClick={component1Click}>1</Appbutton>
                               <Appbutton onClick={component2Click}>2</Appbutton>
                               <Appbutton onClick={component3Click}>3</Appbutton> 
                </SwiperSlide>
                
                <SwiperSlide ><Horizontalpage2/></SwiperSlide>
                <SwiperSlide ><Horizontalpage3/></SwiperSlide>
                <SwiperSlide style={{width:"100%"}}><Horizontalpage4/></SwiperSlide>
            
            </Swiper>
              </SwiperSlide>
                <SwiperSlide><div style={{height:"100vh"}} ref={component1}/>Verticalpage2</SwiperSlide>
                <SwiperSlide><div style={{height:"100vh"}} ref={component2}/>Verticalpage3</SwiperSlide>
                <SwiperSlide><div style={{height:"100vh"}} ref={component3}/>Verticalpage4</SwiperSlide>

                
        </Swiper>

    
      </div>
    );
  }

  

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


{/* <button onClick={component1Click}>1</button>
<button onClick={component2Click}>2</button>
<button onClick={component3Click}>3</button> */}