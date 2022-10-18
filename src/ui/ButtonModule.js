

import React from 'react';
import { darken, lighten } from 'polished';
import styled, { css } from 'styled-components';

const sizeStyles = css`


${props =>
  props.size === 'small' &&
  css`
    width: 140px;
    height: 36px;
    padding: 7px 17px
    size: 14px
    
  `}


  ${props => 
    props.size === 'normal' &&
    css`
      width: 140px;
      height: 36px;
    `}
  



  ${props => 
    props.size === 'large' &&
    css`
      width: 343px;
      height: 56px;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}

    ${props => 
      props.size === 'ToggleButton' &&
      css`
      padding: 7px 17px;
      gap: 10px;
      width: 165px;
      height: 48px;
      background-color: #CDE2FF;
      color: #FFFFFF;
      border-radius: 12px;
      border: 1px solid #DCDEE5;
      font-family: #4A4D57;
      cursor: pointer;
      size: 16px;
        
      `}

      ${props => 
        props.size === 'DisableButton' &&
        css`
        padding: 7px 17px;
        gap: 10px;
        width: 165px;
        height: 48px;
        background-color: #CDE2FF;
        color: #FFFFFF;
        border-radius: 12px;
        border: 1px solid #DCDEE5;
        font-family: #4A4D57;
        cursor: pointer;
        size: 16px;
          
        `}
  

`;

const shadowStyles = css`
  ${props =>
    props.showShadow === true &&
    css`
      /* Shadow/200 */
      box-shadow: 0px 5.86471px 54px rgba(154, 170, 193, 0.18), 0px 5px 29px 5px rgba(182, 191, 203, 0.14);
  `}
  
  ${props =>
    props.showShadow === false &&
    css`
    `}
`;


  const StyledAppButton = styled.button`
    /* 공통 스타일 */
    // display: inline-flex;
    justify-content: center;
    outline: none;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    // padding: 1rem;

    /* 색상 */
    background: #026BFB;

    /* 이벤트 */
    &:hover {
      background: ${lighten(0.1, '#026BFB')};
    }
    &:active {
      background: ${darken(0.1, '#026BFB')};
    }
    
    /* 텍스트 스타일 */
    color: #FFFFFF;
    text-align: center;
    letter-spacing: -0.6px;
    /* Title/2_Semibold 16 */
    font-family: PretendardSemiBold;
    font-size: 14px;
    line-height: 20px;

    /* 크기 */
    ${sizeStyles}

    /* 그림자 */
    ${shadowStyles}
  `;

  function ButtonModule({ type, children, size, showShadow, ...rest}) {
      return (<StyledAppButton type={type} size={size} showShadow={showShadow} {...rest}>{children}</StyledAppButton>);
  }

  ButtonModule.defaultProps = {
      size: 'normal',
      showShadow: false,
  };

  export default ButtonModule;