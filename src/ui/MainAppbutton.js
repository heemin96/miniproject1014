import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
 
  /* 공통 스타일 */
  outline: none;
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;


  /* 크기 */
  width: 41px;
  height 36px;
  Padding: 7px, 17px, 7px, 17px;
  gap: 10px;
  font-size: 14px;

  /* 색상 */
  background: #026BFB;

  &:hover {
  background: #339af0;
  }
  &:active {
  background: #1c7ed6;
  }

  /* 기타 */
  & + & {
  margin-left: 1rem;
  }
  `;

function MainAppbutton({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default MainAppbutton;