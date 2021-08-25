import React from 'react';
import { SIZE } from '../../constants/product';
import { upperCaseFirstLetter } from '../../utils/helper';
import {
  getBackgroundColorStyleForButton,
  getSubtotalPrice,
} from '../../utils/product';
import { CheckoutPageProductProps } from './interface';
import {
  CheckOutPageProductContainer,
  ProductImageDiv,
  ImageContainerDiv,
  ProductDetailsDiv,
  ProductNameParagraph,
  ColorDiv,
  QuantityDiv,
  SubtotalPriceDiv,
} from './style';

export const CheckoutPageProduct: React.FC<CheckoutPageProductProps> = ({
  product,
}) => {
  const { title, image, size, color, quantity } = product;

  const subTotalPrice = getSubtotalPrice(product);

  const styleColor = getBackgroundColorStyleForButton(color);

  return (
    <CheckOutPageProductContainer>
      <ImageContainerDiv>
        <ProductImageDiv style={{ backgroundImage: `url(${image})` }} />
      </ImageContainerDiv>
      <ProductDetailsDiv>
        <ProductNameParagraph>{title}</ProductNameParagraph>
        <p>{SIZE[size]}</p>
        <ColorDiv title={upperCaseFirstLetter(color)} style={styleColor} />
      </ProductDetailsDiv>
      <QuantityDiv>
        <p>QTY: {quantity}</p>
      </QuantityDiv>
      <SubtotalPriceDiv>
        <p>Subtotal: ${subTotalPrice}</p>
      </SubtotalPriceDiv>
    </CheckOutPageProductContainer>
  );
};
