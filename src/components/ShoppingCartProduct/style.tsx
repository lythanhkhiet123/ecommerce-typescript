import styled from 'styled-components';

export const ShoppingCartProductContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #c6c6c6;
  padding: 10px;
  position: relative;
`;

export const ProductImageDiv = styled.div`
  height: 100px;
  width: 50px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const ImageContainerDiv = styled.div``;

export const ProductDetailsDiv = styled.div`
  font-size: 10px;
  margin-left: 10px;
  padding-right: 28px;
`;

export const ProductNameParagraph = styled.div`
  font-size: 13px;
  font-weight: 700;
`;

export const SubtotalParagraph = styled.div``;
export const CloseButton = styled.div`
  position: absolute;
  right: 15px;
  top: 9px;
  font-size: 15px;
  cursor: pointer;
`;
