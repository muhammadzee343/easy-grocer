import React from 'react';
import {View} from 'react-native';
import ProductDisplayCard from '../../../Components/ProductDisplayCard';

const feature_product = [
  {
    id: 1,
    ProductTitle: 'Coke',
    quantity: '25 ml',
    discount: '10% off',
    newPrice: 75,
    oldPrice: 85,
    Description: 'This is description text.',
  },
  {
    id: 2,
    ProductTitle: 'Coke',
    quantity: '25 ml',
    discount: '10% off',
    newPrice: 75,
    oldPrice: 85,
    Description: 'This is description text.',
  },
  {
    id: 3,
    ProductTitle: 'Coke',
    quantity: '25 ml',
    discount: '10% off',
    newPrice: 75,
    oldPrice: 85,
    Description: 'This is description text.',
  },
  {
    id: 4,
    ProductTitle: 'Coke',
    quantity: '25 ml',
    discount: '10% off',
    newPrice: 75,
    oldPrice: 85,
    Description: 'This is description text.',
  },
  {
    id: 5,
    ProductTitle: 'Coke',
    quantity: '25 ml',
    discount: '10% off',
    newPrice: 75,
    oldPrice: 85,
    Description: 'This is description text.',
  },
];

const FeatureProduct = props => {
  return (
    <ProductDisplayCard
      featureProduct={feature_product}
      // circleImage
      navigation={props.navigation}
    />
  );
};

export default FeatureProduct;
