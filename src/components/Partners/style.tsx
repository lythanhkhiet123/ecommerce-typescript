import styled, { css } from 'styled-components';

const PartnerCSS = css`
  height: 75px;
  width: 150px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
export const PartnersContainerDiv = styled.div`
  margin-top: 200px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PartnersListDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
  width: 60%;
  flex-wrap: wrap;
`;

export const AmazonDiv = styled.div`
  background-image: url('https://i.ibb.co/YP6pM96/amazon.jpg');
  ${PartnerCSS}
`;

export const ShopifyDiv = styled.div`
  background-image: url('https://i.ibb.co/TB5HYLz/shopify.jpg');
  ${PartnerCSS}
`;

export const WixDiv = styled.div`
  background-image: url('https://i.ibb.co/FzQtDX5/wix.jpg');
  ${PartnerCSS}
`;
