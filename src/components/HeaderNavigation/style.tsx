import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const NavItemCss = css`
  padding-top: 6px;
`;

export const HeaderNavItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const NavItemLink = styled(Link)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  color: black;
  margin-right: 50px;
  ${NavItemCss}
`;

export const ShopNameLink = styled(Link)`
  font-size: 50px;
  color: palevioletred;
  font-style: italic;
  font-weight: bold;
  font-family: fantasy;
  margin-right: 50px;
`;

export const NavItemsLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const NavItemsRight = styled.div`
  display: flex;
  align-items: center;
`;

export const ShoppingCart = styled.div`
  color: green;
  font-size: 35px;
`;
