import styled from 'styled-components';

export const InputContainer = styled.div`
  &input {
    border: 1px solid #d9d9d9;
    padding: 4px 11px;
    font-size: 18px;
    outline: none;
    box-sizing: border-box;
    border-radius: 5px;
  }
  &.input.positive-ui {
    border: 1px solid #4db6ac;
  }
  &input.error-ui {
    border: 1px solid #d93900;
  }
`;

export const LabelDiv = styled.div`
  font-size: 20px;
  margin-bottom: 7px;
`;

export const ErrorMessageDiv = styled.div`
  margin-top: 10px;
  font-size: 12px;
  font-style: italic;
  color: #d93900;
`;
