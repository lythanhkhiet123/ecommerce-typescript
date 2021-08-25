import styled from 'styled-components';

export const ProductCardContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }
  &.dark {
    background-color: white;
    border-radius: 5px;
  }

  &.dark p {
    color: black;
  }
`;

export const ProductImageDiv = styled.div`
  min-height: 200px;
  width: 300px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const ShopDiv = styled.div``;
