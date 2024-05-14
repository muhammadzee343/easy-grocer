import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import {
  button_backgroun,
  Dark,
  primary_brand,
  primary_brand_dark,
  primary_Color,
  text_grey,
  transparent,
  white,
} from '../Assets/themes/colors';
import {
  FONT_KARLA,
  FONT_ROBOTO,
  FONT_SIZE_h1,
  FONT_SIZE_h5,
  FONT_SIZE_h6,
  FONT_SIZE_h8,
} from '../Assets/themes/fonts';
import {GradientBtn} from './GradientBtn';
import CustomHeader from './CustomHeader';
import BackArrowIcon from '../Assets/icons/BackArrow';
import ShareIcon from '../Assets/icons/SahreIcon';
import SearchIcon from '../Assets/icons/SearchIcon';
import MinusIcon from '../Assets/icons/MinusIcon';
import PlusIcon from '../Assets/icons/PlusIcon';
import AmountFooter from './AmountFooter';
import TrashIcon from '../Assets/icons/TrashIcon';

const ProductDisplayCard = props => {
  const [cartQuantity, setCartQuantity] = useState(false);
  const [itemquantity, setItemQuantity] = useState(1);
  const SquareButtOnClickAction = () => {
    // props.navigation.navigate('addToCart');
    setCartQuantity(!cartQuantity);
  };
  const BackIconPressAction = () => {
    props.navigation.goBack();
  };
  // const onChangeText = val => {
  //   setItemQuantity(val);
  // };
  const onIncrementAction = val => {
    setItemQuantity(itemquantity + 1);
  };
  const onDecrementAction = val => {
    setItemQuantity(itemquantity - 1);
  };
  const onPressPlaceOrder = val => {
    props.navigation.navigate('placeOrder');
  };
  const onPressAddToCart = () => {
    setCartQuantity(!cartQuantity);
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={button_backgroun} />
      <CustomHeader
        leftIcon={<BackArrowIcon iconColor={Dark} />}
        // headerTitle="Coke"
        // rightIcon={<SearchIcon iconColor={button_backgroun} />}
        onBackPress={BackIconPressAction}
        bgColor={white}
      />
      <ScrollView style={props.cartScreen ? styles.containerAdjustment : null}>
        {props.featureProduct.map((data, index) => {
          return (
            <View style={styles.container} key={index}>
              <StatusBar backgroundColor="#04A046" />
              <View>
                <TouchableOpacity
                  style={{flexDirection: 'row'}}
                  activeOpacity={0.6}
                  onPress={() => {
                    props.navigation.navigate('productDetail', {
                      // id: data.id,
                      productImg: data.productImg,
                      productName: data.ProductTitle,
                      // productWeight: data.quantity,
                      productOrignalPrice: data.newPrice,
                      productBeforePrice: data.oldPrice,
                    });
                  }}>
                  <View
                    style={{
                      padding: 2,
                    }}>
                    <Image
                      // {uri: props.profileImageUrl}
                      source={require('../Assets/images/productImage.jpg')}
                      style={
                        props.circleImage
                          ? styles.circleImageStyle
                          : styles.withoutCircleImageStyle
                      }
                    />
                  </View>
                  <View>
                    <View>
                      <Text style={styles.titleTextStyle}>
                        {data.ProductTitle}
                      </Text>
                      <Text style={styles.quantityStyle}>{data.quantity}</Text>
                      <Text style={styles.discountStyle}>{data.discount}</Text>
                    </View>
                    <View style={styles.descriptionStyle}>
                      <View>
                        <Text style={styles.newPriceStyle}>
                          RS.{data.newPrice}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.oldPriceStyle}>
                          {props.oldPrice}
                        </Text>
                      </View>
                      {props.cartScreen ? (
                        cartQuantity ? (
                          <View style={styles.quantityContainer}>
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
                        ) : (
                          <TouchableOpacity
                            style={styles.cartBtnContainerStyle}
                            activeOpacity={0.7}
                            onPress={SquareButtOnClickAction}>
                            <GradientBtn
                              customHeight={30}
                              customWidth={110}
                              name="Add to cart"
                              squareWithCenter
                              first_Gradient_Color={primary_Color}
                              second_Gradient_Color={primary_Color}
                              third_Gradient_Color={primary_brand_dark}
                              txetColor={white}
                            />
                            {/* <Image source={require('../Assets/images/cartBtn.png')} /> */}
                          </TouchableOpacity>
                        )
                      ) : cartQuantity ? (
                        <View style={styles.quantityContainer}>
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
                      ) : (
                        <TouchableOpacity
                          style={styles.cartBtnContainerStyle}
                          activeOpacity={0.7}
                          onPress={SquareButtOnClickAction}>
                          <GradientBtn
                            customHeight={30}
                            customWidth={110}
                            name="Add to cart"
                            squareWithCenter
                            first_Gradient_Color={primary_Color}
                            second_Gradient_Color={primary_Color}
                            third_Gradient_Color={primary_brand_dark}
                            txetColor={white}
                          />
                          {/* <Image source={require('../Assets/images/cartBtn.png')} /> */}
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
      {props.cartScreen ? (
        <View>
          <View style={styles.footerContainer}>
            <AmountFooter />
          </View>
          <TouchableOpacity
            style={styles.placeOrderContainer}
            activeOpacity={0.8}
            onPress={onPressPlaceOrder}>
            <GradientBtn
              name="Place Order"
              squareWithCenter
              customWidth={'70%'}
              customHeight={50}
              first_Gradient_Color={primary_Color}
              second_Gradient_Color={primary_Color}
              third_Gradient_Color={primary_brand_dark}
              txetColor={white}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 125,
    backgroundColor: white,
    margin: 8,
    borderColor: transparent,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
  circleImageStyle: {
    height: 115,
    width: 110,
    borderColor: transparent,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  withoutCircleImageStyle: {
    height: 120,
    width: 120,
    borderColor: transparent,
    borderBottomLeftRadius: 10,
  },
  titleTextStyle: {
    color: Dark,
    fontFamily: FONT_ROBOTO,
    fontSize: FONT_SIZE_h1,
  },
  quantityStyle: {
    color: text_grey,
    fontFamily: FONT_KARLA,
    fontSize: FONT_SIZE_h5,
    paddingBottom: 5,
  },
  discountStyle: {
    backgroundColor: 'red',
    borderColor: transparent,
    borderRadius: 10,
    paddingLeft: 5,
    fontSize: FONT_SIZE_h8,
    color: white,
    width: 58,
    height: 20,
  },
  descriptionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  newPriceStyle: {
    width: 50,
    color: Dark,
    fontWeight: 'bold',
    fontSize: FONT_SIZE_h5,
  },
  oldPriceStyle: {
    textDecorationLine: 'line-through',
    width: 50,
    color: text_grey,
    fontFamily: FONT_KARLA,
    fontSize: FONT_SIZE_h6,
  },
  cartBtnContainerStyle: {
    marginLeft: 5,
  },
  cartLogoBtnOuterContainer: {
    position: 'absolute',
    top: -10,
    left: -30,
    borderColor: primary_brand,
    borderWidth: 5,
    borderRadius: 27,
    height: 55,
    width: 55,
  },
  cartLogoBtnInnerContainer: {
    height: 45,
    width: 45,
    borderColor: Dark,
    borderWidth: 1,
    borderRadius: 22,
    backgroundColor: white,
  },
  cartLogoImageStyle: {
    height: 35,
    width: 35,
    borderColor: transparent,
    borderRadius: 17,
  },
  quantityContainer: {
    height: 35,
    width: 110,
    borderColor: button_backgroun,
    borderRadius: 30,
    backgroundColor: white,
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  quantityTextStyle: {
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 55,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: white,
  },
  placeOrderContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    backgroundColor: white,
  },
  containerAdjustment: {
    marginBottom: 108,
  },
  decrementBtnContainer: {
    paddingLeft: 5,
    width: 35,
    height: 30,
    justifyContent: 'center',
  },
  incrementBtnContainer: {
    paddingLeft: 5,
    width: 35,
    height: 30,
    justifyContent: 'center',
  },
});

export default ProductDisplayCard;
