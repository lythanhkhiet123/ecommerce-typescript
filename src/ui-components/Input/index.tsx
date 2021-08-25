import React from 'react';
import { InputProps } from './interface';
import './style.tsx';
import { InputContainer, LabelDiv, ErrorMessageDiv } from './style';
export const Input: React.FC<InputProps> = ({
  onChange,
  error,
  positive,
  inputStyle,
  inputContainerStyle,
  label,
  inputRef,
}) => {
  const overrideClassName =
    (error && 'error-ui') || (positive && 'positive-ui') || '';

  return (
    <InputContainer style={inputContainerStyle}>
      <LabelDiv>{label}</LabelDiv>
      <input
        ref={inputRef}
        style={inputStyle}
        onChange={onChange}
        className={overrideClassName}
      />
      {error && <ErrorMessageDiv>{error}</ErrorMessageDiv>}
    </InputContainer>
  );
};
