import React, { forwardRef, useRef, useState } from 'react';
import Appbutton from '../ui/Appbutton';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import Swiper React components

import{ Mousewheel, Keyboard } from "swiper";
// Import Swiper styles


function MainPage() {

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
      <Appbutton onClick={this.component1Click}>1</Appbutton>
      <Appbutton onClick={this.component2Click}>2</Appbutton>
      <Appbutton onClick={this.component3Click}>3</Appbutton>
    </div>
  )
}


export default MainPage

