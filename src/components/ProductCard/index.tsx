import React from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ProductPurchase } from '../../store/reducers/userReducer';
import { getProductVariantDetails } from '../../utils/product';
import { ProductCardModal } from '../ProductCardModal';
import { ProductCardProps, ProductCardState } from './interface';
import { ProductCardContainerDiv, ProductImageDiv } from './style';

export class ProductCard extends React.Component<
  ProductCardProps,
  ProductCardState
> {
  constructor(props: ProductCardProps) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  onClickProductCard = () => {
    this.setState({ showDetails: true });
  };

  onClickOutsideModalBody = () => {
    this.setState({ showDetails: false });
  };

  handleAddToCart = (product: ProductPurchase) => {
    this.props.addToCart(product);
    this.setState({ showDetails: false });
  };

  render() {
    const { showDetails } = this.state;
    const { product } = this.props;
    const { initialVariant, variants, variantsOptionsAvailable } =
      getProductVariantDetails(product);

    return (
      <ThemeContext.Consumer>
        {(theme) =>
          initialVariant ? (
            <ProductCardContainerDiv
              onClick={this.onClickProductCard}
              className={` ${theme}`}
            >
              <ProductImageDiv
                style={{ backgroundImage: `url(${initialVariant.image})` }}
              />
              <div className="product-details">
                <p>{initialVariant.title}</p>
              </div>
              <ProductCardModal
                onClickOutsideModalBody={this.onClickOutsideModalBody}
                show={showDetails}
                initialVariant={initialVariant}
                variants={variants}
                variantsOptionsAvailable={variantsOptionsAvailable}
                addToCart={this.handleAddToCart}
              />
            </ProductCardContainerDiv>
          ) : null
        }
      </ThemeContext.Consumer>
    );
  }
}
