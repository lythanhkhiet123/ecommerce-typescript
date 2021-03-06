import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
.checkbox-icon{
  color: #a8a8a8;
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  left: 0;

  
}


.fa-check-square{
  color:#f57224;
  font-size: 19px;
}


`;

export const CheckBoxContainerDiv = styled.div`
  cursor: pointer;
  font-size: 15px;
  display: inline-flex;
  position: relative;
  &:hover .checkbox-icon {
    color: #f57224;
  }
`;

export const CheckBoxChildrenSpan = styled.span`
  color: #757575;
  padding-top: 1px;
  box-sizing: border-box;
  margin-left: 30px;
`;
