import { click } from '@testing-library/user-event/dist/click';
import React from 'react'
import { useState } from 'react';
import "../App.css";
import ButtonModule from '../ui/ButtonModule';

function Horizontalpage3() {

  const [toggleStatus, setToggleStatus] = useState(false);
  const [disable, setDisable] =useState(false);

  const onClickToggle = (e) => {
    setToggleStatus(prevStatus => prevStatus ? false : true); //prevStatus : setState상태 값을 여러번 변경 할때 쓴다해서 썼슴다.
    setDisable(!true)
  };

  const onClickDisable = (e) => { 
    setDisable(prevStatus => prevStatus ? false : true);
    setDisable(true)
  };

  return (
    <div>
       <ButtonModule size='ToggleButton' disabled={!disable} onClick={()=>{ 
          onClickToggle();
          }}>
          토글 버튼
          {/* { toggleStatus ? <ToggleMenu /> : null} 기존 삼항연산자로 보이게 한 방법*/}
          {/* { toggleStatus &&  <ToggleMenu />} 맥스님이 사용하는 방식*/} 

       </ButtonModule>

        <div className='space'/> 

       <ButtonModule size='DisableButton' disabled={disable} onClick={()=> {  
          onClickDisable();
          }}>
            Enable 버튼
       </ButtonModule> 
    </div>
    
  )
}

export default Horizontalpage3
























// const ToggleMenu = () => (
//   <div className='GnbMenuContainer'>
//     <ul className='Toggle'>
//       <li>Toggle 1</li>
//       <li>Toggle 2</li>
//       <li>Toggle 3</li>
//     </ul>
// </div>
// );ㄷㄷㄷㄷ
