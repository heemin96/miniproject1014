import React, { forwardRef, useRef, useState } from 'react';
import styled from 'styled-components';
import Appbutton from '../ui/Appbutton';
import { createContext } from 'react';

const MainPage = forwardRef((props, ref) => {


  const component1 = useRef(null);
  const component2 = useRef(null);
  const component3 = useRef(null);

  const component1Click=()=>{
    component1.current.scrollIntoView({behavior:'smooth'});
  };

  const component2Click=()=>{
    component2.current.scrollIntoView({behavior:'smooth'});
  };


  const component3Click=()=>{
    component3.current.scrollIntoView({behavior:'smooth'});
  };


  return (
    <div>

        <button onClick={component1Click}>1</button>
        <button onClick={component2Click}>2</button>
        <button onClick={component3Click}>3</button>

    </div>
  )
})


export default MainPage

