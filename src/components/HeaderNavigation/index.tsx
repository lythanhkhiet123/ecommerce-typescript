import React from 'react';
import { ROUTE } from '../../constants/route';
import ShoppingCart from '../../containers/ShoppingCart';
import {
  HeaderNavItemDiv,
  NavItemLink,
  NavItemsLeft,
  NavItemsRight,
  ShopNameLink,
} from './style';

export const HeaderNavigation: React.FC = () => {
  return (
    <HeaderNavItemDiv>
      <NavItemsLeft>
        <ShopNameLink to={ROUTE.HOME}>Shopspree</ShopNameLink>
        <NavItemLink to={ROUTE.ALL_PRODUCTS}>All Products</NavItemLink>
      </NavItemsLeft>
      <NavItemsRight>
        <ShoppingCart />
      </NavItemsRight>
    </HeaderNavItemDiv>
  );
};
