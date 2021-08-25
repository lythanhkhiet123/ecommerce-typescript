import styled, { createGlobalStyle, css } from 'styled-components';

export const ModalOverLay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.45);
`;

const ModalBody = css`
  position: absolute;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
`;

export const GlobalStyles = createGlobalStyle`

.modal-body {
    ${ModalBody}
};
`;

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
