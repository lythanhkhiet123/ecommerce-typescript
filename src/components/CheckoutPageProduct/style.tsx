import styled from 'styled-components';

export const CheckOutPageProductContainer = styled.div`
  display: flex;
`;
export const ProductImageDiv = styled.div`
  height: 150px;
  width: 100px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  &p {
    margin-bottom: 5px;
    margin-top: 5px;
  }
`;

export const ImageContainerDiv = styled.div`
  margin-right: 30px;
  width: 20%;
`;

export const ProductDetailsDiv = styled.div`
  width: 40%;
`;

export const ProductNameParagraph = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const ColorDiv = styled.div`
  height: 30px;
  width: 80px;
  border-radius: 5px;
  margin-top: 10px;
`;
export const QuantityDiv = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  padding-left: 30px;
  box-sizing: border-box;
`;

export const SubtotalPriceDiv = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;
`;
