import React from 'react';
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCartProduct } from '../../components/ShoppingCartProduct';
import { ROUTE } from '../../constants/route';
import UserAction from '../../store/actions/userAction';
import { ProductPurchase } from '../../store/reducers/userReducer';
import { StoreStateType } from '../../store/rootReducer';
import { Button } from '../../ui-components/Button';
import Popover from '../../ui-components/Popover';
import {
  ShoppingCartDispatchProps,
  ShoppingCartOwnProps,
  ShoppingCartProps,
  ShoppingCartState,
  ShoppingCartStateProps,
} from './interface';
import {
  ShoppingCartContainer,
  ShopCartNotification,
  ShoppingCartContainerPopover,
  GlobalStyles,
  ShoppingCartAllProducts,
} from './style';

class ShoppingCart extends React.Component<
  ShoppingCartProps,
  ShoppingCartState
> {
  constructor(props: ShoppingCartProps) {
    super(props);

    this.state = {
      showPopover: false,
    };
  }

  handlePopoverClick = () => {
    const { cart } = this.props;
    cart.length && this.setState({ showPopover: !this.state.showPopover });
  };

  handleRemoveToCart = (product: ProductPurchase) => {
    const { cart } = this.props;
    cart.length === 1 && this.setState({ showPopover: false });
    this.props.removeToCart(product);
  };

  getAllProducts = () => {
    const { cart, removeToCart } = this.props;
    return cart.map((product) => (
      <ShoppingCartProduct
        key={`${product.productId}-${product.variantId}`}
        product={product}
        removeToCart={this.handleRemoveToCart}
      />
    ));
  };

  render() {
    const { cart } = this.props;
    const { showPopover } = this.state;
    const cartLength = cart.length;

    const notificationUI = cartLength ? (
      <ShopCartNotification>{cartLength}</ShopCartNotification>
    ) : null;

    const popoverContent = (
      <ShoppingCartContainerPopover>
        <ShoppingCartAllProducts>
          {this.getAllProducts()}
        </ShoppingCartAllProducts>
        <Link
          to={ROUTE.CHECKOUT}
          component={({ navigate }) => (
            <Button
              className="checkout-button"
              type="primary"
              onClick={() => {
                navigate();
                this.handlePopoverClick();
              }}
            >
              Checkout
            </Button>
          )}
        />
      </ShoppingCartContainerPopover>
    );

    return (
      <div>
        <GlobalStyles />
        <Popover
          controlShow={showPopover}
          onClick={this.handlePopoverClick}
          position="bottomleft"
          content={popoverContent}
        >
          <ShoppingCartContainer>
            <i className="nav-item fa fa-shopping-cart"></i>
            {notificationUI}
          </ShoppingCartContainer>
        </Popover>
      </div>
    );
  }
}

const mapStateToProps: MapStateToProps<
  ShoppingCartStateProps,
  ShoppingCartOwnProps,
  StoreStateType
> = (state) => {
  const { cart } = state.user;

  return {
    cart,
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<
  ShoppingCartDispatchProps,
  ShoppingCartOwnProps
> = (dispatch) => {
  const { removeToCart } = new UserAction();

  return {
    removeToCart: (productPurchase) => dispatch(removeToCart(productPurchase)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
