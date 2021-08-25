import React from 'react';
import { Partners } from '../../components/Partners';
import { ShopQuality } from '../../components/ShopQuality';
import BestSeller from '../BestSeller';
import { CoverImage } from './style';

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage-container">
        <CoverImage />
        <ShopQuality />
        <BestSeller />
        <Partners />
      </div>
    );
  }
}

export default HomePage;
