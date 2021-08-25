import styled from 'styled-components';

export const CustomerInfoContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;
  width: 50%;
  margin-left: 50px;
  border: 1px solid #c8c8c8;
  border-radius: 10px;

  &.customer-info-modal-body {
    width: 500px;
    display: flex;
    flex-direction: column;
  }

  &.complete-purchase-btn {
    margin-top: 30px;
    font-size: 20px;
  }
`;
export const HeadingDiv = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const HeaderDiv = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
