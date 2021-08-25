import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
.fa-shopping-cart {
  color: green;
  font-size: 35px;
}

.fa-shopping-cart:hover {
  cursor: pointer;
}
.checkout-button {
  width: 100%;
}
`;
export const ShoppingCartContainer = styled.div`
  position: relative;
`;

export const ShopCartNotification = styled.div`
  position: absolute;
  border-radius: 50px;
  top: -10px;
  right: -15px;
  background-color: red;
  color: white;
  padding: 2px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  cursor: pointer;
  border: 2px solid black;
`;

export const ShoppingCartContainerPopover = styled.div`
  width: 300px;
`;

export const Subtotal = styled.div`
  margin-top: 10px;
  font-size: 13px;
  font-weight: 600;
`;

export const ShoppingCartAllProducts = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;
