import React from 'react';
import {
  PartnersContainerDiv,
  PartnersListDiv,
  AmazonDiv,
  ShopifyDiv,
  WixDiv,
} from './style';

export const Partners: React.FC = () => {
  return (
    <PartnersContainerDiv>
      <h2>Trusted By Our Partners</h2>
      <PartnersListDiv>
        <AmazonDiv />
        <ShopifyDiv />
        <WixDiv />
      </PartnersListDiv>
    </PartnersContainerDiv>
  );
};
