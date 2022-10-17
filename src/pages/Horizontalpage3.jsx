import { click } from '@testing-library/user-event/dist/click';
import React from 'react'
import { useState } from 'react';
import "../App.css";

function Horizontalpage3() {

  const [toggleStatus, setToggleStatus] = useState(false);
  const [disable, setDisable] =useState(false);

  const onClickToggle = (e) => {
    setToggleStatus(prevStatus => prevStatus ? false : true);


  };

  const onClickDisable = (e) => {
    
  };


  function button(){
    if(click.onClickToggle){
      return onClickDisable
    }
   

    
  }

  const ToggleMenu = () => (
    <div className='GnbMenuContainer'>
      <ul className='Toggle'>
        <li>Toggle 1</li>
        <li>Toggle 2</li>
        <li>Toggle 3</li>
      </ul>
  </div>
  );

  

  return (
    <div>
       <button className='ToggleButton' onClick={()=>{ 
          onClickToggle()
          
          }} >
          
          Toggle Button
       </button>

         <div className='space'/>

       <button className='DisableButton' disabled={disable} onClick={()=> setDisable(true)}>
          button2
       </button>

       { toggleStatus ? <ToggleMenu /> : null}
       
    </div>
    
  )
}

export default Horizontalpage3
