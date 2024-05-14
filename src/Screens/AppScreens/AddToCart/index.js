import React from 'react';
import {StatusBar, View} from 'react-native';
import {button_backgroun} from '../../../Assets/themes/colors';
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
  {
    id: 6,
    ProductTitle: 'Coke',
    quantity: '25 ml',
    discount: '10% off',
    newPrice: 75,
    oldPrice: 85,
    Description: 'This is description text.',
  },
];

const AddToCart = props => {
  return (
    <View style={{flex: 1}}>
      <ProductDisplayCard
        featureProduct={feature_product}
        //   circleImage
        navigation={props.navigation}
        cartScreen
      />
    </View>
  );
};

export default AddToCart;
