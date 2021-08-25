import React from 'react';
import { ButtonProps } from './interface';
import { GlobalStyle, ButtonCustom } from './style';

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'default',
  selected,
  onClick,
  className,
  disabled,
  style,
}) => {
  const selectedClass = selected ? 'selected' : '';

  return (
    <div>
      <GlobalStyle />
      <ButtonCustom
        onClick={onClick}
        className={`btn btn-${type} ${selectedClass} ${className || ''}`}
      >
        {children}
      </ButtonCustom>
    </div>
  );
};
