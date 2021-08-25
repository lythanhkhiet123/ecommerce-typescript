import React from 'react';
import { upperCaseFirstLetter } from '../../utils/helper';
import { getSubtotalPrice } from '../../utils/product';
import { ShoppingCartProductProps } from './interface';
import {
  ShoppingCartProductContainer,
  ProductImageDiv,
  ImageContainerDiv,
  ProductDetailsDiv,
  ProductNameParagraph,
  SubtotalParagraph,
  CloseButton,
} from './style';

export const ShoppingCartProduct: React.FC<ShoppingCartProductProps> = ({
  product,
  removeToCart,
}) => {
  const { title, image, size, color, quantity } = product;

  const subtotalPrice = getSubtotalPrice(product);

  const handleOnClickCloseButton = () => {
    removeToCart(product);
  };

  return (
    <ShoppingCartProductContainer>
      <ImageContainerDiv>
        <ProductImageDiv style={{ backgroundImage: `url(${image})` }} />
      </ImageContainerDiv>
      <ProductDetailsDiv>
        <ProductNameParagraph>{title}</ProductNameParagraph>
        <p>{size}</p>
        <p>{upperCaseFirstLetter(color)}</p>
        <p>QTY: {quantity}</p>
        <SubtotalParagraph>Subtotal: ${subtotalPrice}</SubtotalParagraph>
      </ProductDetailsDiv>
      <CloseButton onClick={handleOnClickCloseButton}>
        <i className="fa fa-times" aria-hidden="true"></i>
      </CloseButton>
    </ShoppingCartProductContainer>
  );
};
