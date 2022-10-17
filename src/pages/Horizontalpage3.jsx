import React from 'react'
import { useState } from 'react';
import "../App.css";

function Horizontalpage3() {

  const [gnbStatus, setGnbStatus] = useState(false);

  const onClickGnb = (e) => {
    setGnbStatus(prevStatus => prevStatus ? false : true);

  };

  const GnbMenu = () => (
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
       
       <button className='ToggleButton' onClick={onClickGnb} >
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg> */}
        Toggle Button
       </button>

       <div className='space'/>

       <button className='DisableButton'>
          button2
       </button>

       { gnbStatus ? <GnbMenu /> : null}

    </div>
    
  )
}

export default Horizontalpage3
