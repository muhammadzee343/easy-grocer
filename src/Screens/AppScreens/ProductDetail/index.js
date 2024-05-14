import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BackArrowIcon from '../../../Assets/icons/BackArrow';
import {
  button_backgroun,
  Dark,
  primary_brand,
  primary_brand_dark,
  primary_Color,
  transparent,
  white,
} from '../../../Assets/themes/colors';
import CustomHeader from '../../../Components/CustomHeader';
import {GradientBtn} from '../../../Components/GradientBtn';
import ProductsHeadingContainer from '../../../Components/ProductHeaderContainer';
import styles from './style';
import imgbread from '../../../Assets/images/bread.png';
import LinearGradient from 'react-native-linear-gradient';
import MinusIcon from '../../../Assets/icons/MinusIcon';
import TrashIcon from '../../../Assets/icons/TrashIcon';
import PlusIcon from '../../../Assets/icons/PlusIcon';
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

const ProductDetail = ({route, navigation}) => {
  const [cartQuantity, setCartQuantity] = useState(false);
  const [itemquantity, setItemQuantity] = useState(1);
  const {
    // id,
    productImg,
    productName,
    // productWeight,
    productOrignalPrice,
    productBeforePrice,
  } = route.params;
  const onViewFeature = () => {
    navigation.navigate('featureProduct');
  };
  const BackPressAction = () => {
    navigation.goBack();
  };
  const onIncrementAction = val => {
    setItemQuantity(itemquantity + 1);
  };
  const onDecrementAction = val => {
    setItemQuantity(itemquantity - 1);
  };
  const onPressAddToCart = () => {
    setCartQuantity(!cartQuantity);
  };
  const onPressCartAction = () => {
    navigation.navigate('addToCart');
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <LinearGradient
        colors={[primary_brand_dark, primary_brand_dark, primary_brand_dark]}
        style={styles.backgroundGradient}
        start={{x: 0.07, y: 0.07}}
        end={{x: 1, y: 1}}>
        <View>
          <CustomHeader
            leftIcon={<BackArrowIcon iconColor={white} />}
            headerTitle={productName}
            rightIcon={<CartIcon iconColor={white} />}
            onBackPress={BackPressAction}
            bgColor={transparent}
            titleColor={white}
            rightIconPressHandle={onPressCartAction}
          />
        </View>
      </LinearGradient>
      <ScrollView
        style={styles.scrollStyle}
        showsVerticalScrollIndicator={false}>
        <View style={styles.ProductImgContainer}>
          <Image source={productImg} style={styles.productImageStyle} />
          <View style={styles.discountContainerStyel}>
            <Text style={styles.discountStyle}>{'10% off'}</Text>
          </View>
          <Text style={styles.productNameStyle}>{productName}</Text>
          <View style={styles.priceSectionContainer}>
            <Text style={styles.priceProducttxt}>RS.{productOrignalPrice}</Text>
            <Text style={{...styles.oldPriceProducttxt, ...styles.cutline}}>
              RS.{productBeforePrice}
            </Text>
          </View>
          {cartQuantity ? (
            <View style={styles.quantityContainer}>
              <View style={styles.quantityBtnContainer}>
                <TouchableOpacity
                  style={styles.decrementBtnContainer}
                  onPress={onDecrementAction}>
                  {itemquantity > 1 ? (
                    <MinusIcon iconColor={button_backgroun} />
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setCartQuantity(!cartQuantity);
                      }}>
                      <TrashIcon iconColor="red" />
                    </TouchableOpacity>
                  )}
                </TouchableOpacity>
                <View style={styles.quantityTextStyle}>
                  <Text style={{color: Dark}}>{itemquantity}</Text>
                </View>
                <TouchableOpacity
                  style={styles.incrementBtnContainer}
                  onPress={onIncrementAction}>
                  <PlusIcon iconColor={button_backgroun} />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.placeOrderContainer}
              activeOpacity={0.8}
              onPress={onPressAddToCart}>
              <GradientBtn
                name="Add To Cart"
                squareWithCenter
                customWidth={'40%'}
                customHeight={35}
                first_Gradient_Color={primary_Color}
                second_Gradient_Color={primary_Color}
                third_Gradient_Color={primary_brand_dark}
                txetColor={white}
                smallBtn
              />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.descTextstyle}>
          Loream Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>

        <View style={styles.cardConatinerStyle}>
          <ProductsHeadingContainer
            title={'Related Products'}
            onPress={onViewFeature}
            productList={prodcut_data}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
