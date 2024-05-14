import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FavIcon from '../Assets/icons/FavIcon';
import MinusIcon from '../Assets/icons/MinusIcon';
import PlusIcon from '../Assets/icons/PlusIcon';
import TrashIcon from '../Assets/icons/TrashIcon';
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
import {FONT_KARLA, FONT_SIZE_h10, FONT_SIZE_h8} from '../Assets/themes/fonts';
import {GradientBtn} from './GradientBtn';
import SquareButton from './SquareButton';
import TextHeadingProduct from './TextHeadingProduct';

export const ProductsHeadingContainer = props => {
  const [cartQuantity, setCartQuantity] = useState(false);
  const [itemquantity, setItemQuantity] = useState(1);
  const onIncrementAction = val => {
    setItemQuantity(itemquantity + 1);
  };
  const onDecrementAction = val => {
    setItemQuantity(itemquantity - 1);
  };
  const onPressAddToCart = () => {
    setCartQuantity(!cartQuantity);
  };
  return (
    <View style={{margin: 10}}>
      <View style={styles.headingContainer}>
        <TextHeadingProduct>{props.title}</TextHeadingProduct>
        <SquareButton text="View" onSquareBtnPress={props.onPress} width={80} />
      </View>
      {/* {props.productList && <ProductCard prodcut_data={props.productList} />} */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.ProductCardContainer}>
        {props.productList.map(data => {
          return (
            <View style={styles.ProductContainer} key={data.id}>
              <View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    props.navigation.navigate('productDetail', {
                      // id: data.id,
                      productImg: data.productImg,
                      productName: data.productName,
                      // productWeight: data.productWeight,
                      productOrignalPrice: data.productOrignalPrice,
                      productBeforePrice: data.productBeforePrice,
                    });
                  }}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.imgProductStyle}
                      source={data.productImg}
                    />
                    <View style={styles.discountCard}>
                      <Text style={styles.discountStyle}>{data.discount}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.productContentSection}>
                  <Text style={styles.productnameStyle}>
                    {data.productName}
                  </Text>
                  <View style={styles.priceProductContainer}>
                    <Text
                      style={[
                        styles.priceProducttxt,
                        {color: button_backgroun},
                      ]}>
                      Rs.{data.productOrignalPrice}
                    </Text>
                    <Text
                      style={{...styles.priceProducttxt, ...styles.cutline}}>
                      Rs.{data.productBeforePrice}
                    </Text>
                  </View>
                  {cartQuantity ? (
                    <View style={styles.quantityContainer}>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: 90,
                          borderColor: button_backgroun,
                          borderRadius: 30,
                          backgroundColor: white,
                          borderWidth: 1,
                        }}>
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
                        customWidth={'100%'}
                        customHeight={30}
                        first_Gradient_Color={primary_Color}
                        second_Gradient_Color={primary_Color}
                        third_Gradient_Color={primary_brand_dark}
                        txetColor={white}
                        smallBtn
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'red',
    // marginBottom: 22,
  },
  btnHeading: {
    textAlign: 'right',
    color: Dark,
    backgroundColor: 'red',
  },
  ProductCardContainer: {
    flexDirection: 'row',
  },
  ProductContainer: {
    backgroundColor: white,
    borderTopEndRadius: 10,
    marginHorizontal: 7,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    // height: 200,
    width: 130,
    // elevation: 5,
    // shadowColor: Dark,
    marginVertical: 10,
    marginBottom: 10,
  },
  imageContainer: {
    width: '100%',
    backgroundColor: white,
    alignItems: 'center',
    backgroundColor: white,
    elevation: 5,
    shadowColor: Dark,
    borderRadius: 10,
    height: 130,
    justifyContent: 'center',
  },
  discountCard: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  discountStyle: {
    backgroundColor: '#4284fc',
    borderColor: transparent,
    borderRadius: 6,
    fontSize: 9,
    color: white,
    width: 28,
    height: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imgProductStyle: {
    width: '90%',
    height: 120,
    // borderBottomLeftRadius: 10,
    // borderTopRightRadius: 10,
    borderRadius: 10,
  },
  productnameStyle: {
    color: Dark,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'karla',
    marginTop: 10,
  },
  productweightStyle: {
    color: Dark,
    paddingLeft: 7,
    paddingTop: 3,
    fontSize: 12,
    fontFamily: FONT_KARLA,
    paddingBottom: 7,
    fontWeight: 'bold',
  },
  priceProductContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  priceProducttxt: {
    fontSize: FONT_SIZE_h8,
    color: text_grey,
    paddingHorizontal: 5,
    width: 70,
    // backgroundColor: 'red',
  },
  cutline: {
    textDecorationLine: 'line-through',
    paddingRight: 10,
  },
  productContentSection: {
    paddingHorizontal: 5,
    paddingBottom: 10,
    width: 100,
  },
  placeOrderContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    marginTop: 10,
  },
  quantityContainer: {
    height: 35,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityTextStyle: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decrementBtnContainer: {
    paddingLeft: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
  incrementBtnContainer: {
    paddingLeft: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
  },
});

export default ProductsHeadingContainer;
