import React from 'react'
import { useState } from 'react';
import "../App.css";

function Verticalpage4() {

  const [btnActive, setBtnActive] = useState("1");

  const toggleActive = (e) => {
    setBtnActive(() => {
      return e.target.value;
    });
  };

  return (
  
    <div className='container'>
      <button className={"btn1" + (1 == btnActive ? " active" : "")} value={1} onClick={toggleActive}>원하는 채널 선택</button>
      <button className={"btn2" + (2 == btnActive ? " active" : "")} value={2} onClick={toggleActive}>옥션 구매</button>
      <button className={"btn3" + (3 == btnActive ? " active" : "")} value={3} onClick={toggleActive}>수익금 받기</button>
    </div>
  );
}

export default Verticalpage4




























// const data = ["원하는 채널 선택", "옥션 구매", "수익금 받기"];

{/* <div>
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
</div> */}
