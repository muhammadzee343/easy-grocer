import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import EditIcon from '../../../Assets/icons/EditIcon';
import LocationIcon from '../../../Assets/icons/LocationIcon';
import MenuIcon from '../../../Assets/icons/MenuIcon';
import SearchIcon from '../../../Assets/icons/SearchIcon';
import {button_backgroun, Dark, white} from '../../../Assets/themes/colors';
import HeaderWithLogo from '../../../Components/HeaderWithLogo';
import LocationHeader from '../../../Components/LocationHeader';
import ProductsHeadingContainer from '../../../Components/ProductHeaderContainer';
import styles from './style';
import imgbread from '../../../Assets/images/bread.png';
import CartIcon from '../../../Assets/icons/CartIcon';

const prodcut_data = [
  {
    id: 1,
    productImg: imgbread,
    productName: 'Dawn Bread Large',
    discount: '10% off',
    productOrignalPrice: '114',
    productBeforePrice: '130',
  },
  {
    id: 2,
    productImg: imgbread,
    productName: 'Dawn Bread Large',
    discount: '10% off',
    productOrignalPrice: '114',
    productBeforePrice: '130',
  },
  {
    id: 3,
    productImg: imgbread,
    productName: 'Dawn Bread Large',
    discount: '10% off',
    productOrignalPrice: '114',
    productBeforePrice: '130',
  },
  {
    id: 4,
    productImg: imgbread,
    productName: 'Dawn Bread Large',
    discount: '10% off',
    productOrignalPrice: '114',
    productBeforePrice: '130',
  },
  {
    id: 5,
    productImg: imgbread,
    productName: 'Dawn Bread Large',
    discount: '10% off',
    productOrignalPrice: '114',
    productBeforePrice: '130',
  },
];

export default function HomeScreen(props) {
  const onViewFeature = () => {
    props.navigation.navigate('featureProduct');
  };
  const onCartPressAction = () => {
    props.navigation.navigate('addToCart');
  };
  const onLocationIconPressAction = () => {
    props.navigation.navigate('maps');
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={button_backgroun} />
      <View style={styles.headerContainer}>
        <HeaderWithLogo
          headerTitle="Home"
          menuIcon={<CartIcon iconColor={Dark} />}
          menuIconPressHandle={onCartPressAction}
        />
      </View>
      <View style={styles.locationHeaderContainer}>
        <LocationHeader
          leftIcon={<LocationIcon iconColor={white} wid={30} hei={36} />}
          LocationName="Sheikhupura, Punjab Pakistan"
          rightIcon={<EditIcon />}
          rightIconPressHandle={onLocationIconPressAction}
        />
      </View>
      {/* <View style={styles.cardDescriptionContainer}> */}
      <ScrollView
        style={styles.cardContainer}
        showsVerticalScrollIndicator={false}>
        {/* <View style={styles.badgeImageContainer}> */}
        <Image
          source={require('../../../Assets/images/badgeImage.jpg')}
          style={styles.badgeImageStyle}
        />
        {/* </View> */}
        <View style={styles.cardConatinerStyle}>
          <ProductsHeadingContainer
            title={'Featured Products'}
            onPress={onViewFeature}
            productList={prodcut_data}
            navigation={props.navigation}
            // onPress={onPressAddToCart}
          />
        </View>
        <View style={[styles.cardConatinerStyle, {marginBottom: 25}]}>
          <ProductsHeadingContainer
            title={'Top Sellers'}
            onPress={onViewFeature}
            productList={prodcut_data}
            navigation={props.navigation}
            // onPress={onPressAddToCart}
          />
        </View>
      </ScrollView>
      {/* </View> */}
    </View>
  );
}
