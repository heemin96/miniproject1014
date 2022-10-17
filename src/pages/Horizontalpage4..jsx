import React from 'react'
import { useState } from 'react';
import "../App.css";
import Appbutton from '../ui/Appbutton'


function Horizontalpage4() {
  const data = ["원하는 채널 선택", "옥션 구매", "수익금 받기"];

  const [btnActive, setBtnActive] = useState("");

  const toggleActive = (e) => {
    setBtnActive(() => {
      return e.target.value;
    });
  };



  return (
  
    <div>
      <div className="container">
        {data.map((item, idx) => {
          return (
            <>
              <button
                value={idx}
                className={"btn" + (idx == btnActive ? " active" : "")}
                onClick={toggleActive}
              >
                {item}
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Horizontalpage4
