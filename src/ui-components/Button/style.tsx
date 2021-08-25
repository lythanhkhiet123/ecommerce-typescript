import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
.btn-primary{
  background-color: #e66b00;

  &:hover{
    background-color: #a44e00;
  }

  &.selected{
    background-color:#a44e00;
  }
} 

.btn-default{
  background-color: #FFFFFF;
  color: #404040;
  border: 1px solid #a8a8a8;

  &:hover, &.selected {
    background-color: #b3b3b3;
  }
}

`;

export const ButtonCustom = styled.button`
  height: 40px;
  width: auto;
  border-radius: 5px;
  border: none;
  outline: 0;
  color: #ffffff;
  cursor: pointer;
  font-family: Arial;

  &:active {
    transform: scale(0.95);
  }
`;
