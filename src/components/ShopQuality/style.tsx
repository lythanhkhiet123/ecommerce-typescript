import styled, { css } from 'styled-components';

const ShopQualityCSS = css`
  min-height: 250px;
  width: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid black;

  &h3 {
    margin-bottom: 5px;
  }
`;

export const ShopQualityContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 200px;
  flex-wrap: wrap;
`;

export const QualityItemContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 100%;
`;

export const SupportLocalDiv = styled.div`
  background-image: url('https://i.ibb.co/YysGPDL/support-local.jpg');
  ${ShopQualityCSS}
`;
export const HighQualityDiv = styled.div`
  background-image: url('https://i.ibb.co/CnQNvcG/high-quality.jpg');
  ${ShopQualityCSS}
`;
export const EcoFriendlyDiv = styled.div`
  background-image: url('https://i.ibb.co/0Fd5Ft6/eco-friendly.jpg');
  ${ShopQualityCSS}
`;
