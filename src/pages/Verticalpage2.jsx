import React from 'react'
import styled from "styled-components";
import { forwardRef } from 'react'
import MainPage from './MainPage';

// const p = styled.div`
// align-items: center;
// align-self: center;
// background-color: green;
// `;



const Verticalpage2 = forwardRef((props, ref) => {

    return (
    <div ref={ref}>
        {props.childeren}
        Verticalpage2
    </div>
    )
})
export default Verticalpage2
