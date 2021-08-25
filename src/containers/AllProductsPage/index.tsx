import React from 'react';
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from 'react-redux';
import { AllProductsSideBar } from '../../components/AllProductsSideBar';
import Pagination from '../../components/Pagination';
import { ProductCard } from '../../components/ProductCard';
import ShopAction from '../../store/actions/shopAction';
import UserAction from '../../store/actions/userAction';
import { StoreStateType } from '../../store/rootReducer';
// import { Modal } from '../../ui-components/Modal';
import {
  AllProductsDispatchToProps,
  AllProductsOwnProps,
  AllProductsPageProps,
  AllProductsStateProps,
} from './interface';

import {
  AllProductsPageContainerDiv,
  ProductItemContainerDiv,
  AllProductItemContainerDiv,
  AllProduct,
} from './style';

class AllProductsPage extends React.Component<AllProductsPageProps> {
  componentDidMount() {
    const { shopProducts } = this.props;

    if (!shopProducts.products.length) {
      this.props.fetchShopProductsAndFilters();
    }
  }

  renderAllProducts = () => {
    const { shopProducts, addToCart } = this.props;
    return shopProducts.products.map((product) => {
      return (
        <ProductItemContainerDiv key={product.id}>
          <ProductCard product={product} addToCart={addToCart} />
        </ProductItemContainerDiv>
      );
    });
  };

  handlePageChange = (selectedPage: number) => {
    const { userSelectedPage, updateUserShopProductsPage } = this.props;

    if (userSelectedPage !== selectedPage)
      updateUserShopProductsPage(selectedPage);
  };

  render() {
    const {
      productFilters,
      userFilters,
      updateUserFilters,
      shopProducts,
      userSelectedPage,
    } = this.props;
    return (
      <AllProductsPageContainerDiv>
        <AllProductsSideBar
          onUpdateUserFilters={updateUserFilters}
          userFilters={userFilters}
          productFilters={productFilters}
        />
        <AllProductItemContainerDiv>
          <AllProduct>{this.renderAllProducts()}</AllProduct>
          <Pagination
            overrideSelectedPage={userSelectedPage}
            onChange={this.handlePageChange}
            numberOfPages={shopProducts.totalPages}
          />
        </AllProductItemContainerDiv>
      </AllProductsPageContainerDiv>
    );
  }
}

const mapStateToProps: MapStateToProps<
  AllProductsStateProps,
  AllProductsOwnProps,
  StoreStateType
> = (state) => {
  const { shopProducts, productFilters } = state.shop;
  const { filters, shopProductsPage } = state.user;
  return {
    shopProducts: shopProducts,
    productFilters: productFilters,
    userFilters: filters,
    userSelectedPage: shopProductsPage,
  };
};

const mapDispatchToProps: MapDispatchToPropsFunction<
  AllProductsDispatchToProps,
  AllProductsOwnProps
> = (dispatch) => {
  const { fetchShopProducts, fetchShopProductsAndFilters } = new ShopAction();
  const { updateUserFilters, updateUserShopProductsPage, addToCart } =
    new UserAction();
  return {
    fetchShopProducts: (options) => dispatch(fetchShopProducts(options)),
    fetchShopProductsAndFilters: () => dispatch(fetchShopProductsAndFilters()),
    updateUserFilters: (filters) => dispatch(updateUserFilters(filters)),
    updateUserShopProductsPage: (shopProductsPage) =>
      dispatch(updateUserShopProductsPage(shopProductsPage)),
    addToCart: (productPurchase) => dispatch(addToCart(productPurchase)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPage);
