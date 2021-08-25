import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

.customer-info {
    width: 50%;
}
.divider {
    border: 1px solid #c8c8c8;
    width: 100%;
    margin: 30px 0px;
}

.fa-truck {
    font-size: 40px;
}

label {
    margin-left: 15px;
    font-weight: 700;
}
`;

export const CheckoutPageContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;

export const CartItemsContainer = styled.div`
  width: 50%;
`;

export const CartItems = styled.div`
  border: 1px solid #c8c8c8;
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
`;

export const CartItemsHeader = styled.div`
  width: 100%;
  border: 1px solid #c8c8c8;
  border-radius: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;

export const ShippingContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: green;
`;

export const CartItemsFooter = styled.div`
  border: 1px solid #c8c8c8;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px 20px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 700;
`;

export const TextDiv = styled.div``;

export const TotalPrice = styled.div`
  width: 20%;
  padding-left: 20px;
  box-sizing: border-box;
  color: #e66b00;
`;
