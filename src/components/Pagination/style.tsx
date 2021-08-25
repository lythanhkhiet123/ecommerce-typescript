import styled, { css, createGlobalStyle } from 'styled-components';

export const PaginationContainerDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const PagesCaret = css`
  font-size: 40px;
  cursor: pointer;
`;

export const PageButton = css`
  margin-left: 5px;
  margin-right: 5px;
  width: 30px;
  height: 30px;
`;

export const GlobalStyles = createGlobalStyle`
.page-caret{${PagesCaret}};

.page-button{${PageButton}}`;

export const PagesContainerDiv = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
`;
