import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {
  button_backgroun,
  Dark,
  primary_brand,
  text_grey,
  transparent,
  white,
} from '../../../Assets/themes/colors';
import {
  FONT_KARLA,
  FONT_SIZE_h8,
  FONT_ROBOTO,
} from '../../../Assets/themes/fonts';

const sWidth = Dimensions.get('window').width;
const sHeight = Dimensions.get('window').height;
const ratio = sWidth / sHeight; //sWidth = ratio * sHeight

const styles = StyleSheet.create({
  backgroundGradient: {
    width: '110%',
    height: 120,
    borderRadius: 100,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: '#aaa',
    alignItems: 'center',
    // marginLeft: ratio * sHeight * 0.5 - sHeight,
    // marginTop: -sHeight * 1.7,
    // paddingTop: sHeight * 1.7,
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollStyle: {
    width: '90%',
    marginTop: -70,
    marginLeft: 0,
  },
  discountContainerStyel: {
    width: 130,
    position: 'absolute',
    top: 13,
    left: 25,
  },
  containerGradient: {
    width: sHeight * 2,
    height: sHeight * 2,
    borderRadius: sHeight * 1,
    // borderTopLeftRadius: 0,
    // borderTopRightRadius: 0,
    backgroundColor: '#aaa',
    alignItems: 'center',
    marginLeft: ratio * sHeight * 0.5 - sHeight,
    marginTop: -sHeight * 1.7,
    paddingTop: sHeight * 1.7,
  },
  ProductImgContainer: {
    // alignItems: 'center',
    marginTop: 5,
    width: '100%',
    backgroundColor: white,
    borderRadius: 20,
    height: 340,
  },
  productHeadContainer: {
    width: '100%',
    backgroundColor: white,
    paddingTop: 8,
    paddingBottom: 10,
  },
  productImageStyle: {
    height: 180,
    width: '90%',
    marginTop: 8,
    borderRadius: 20,
    marginLeft: 15,
  },
  priceSectionContainer: {
    marginLeft: 15,
    marginTop: 5,
    flexDirection: 'row',
    marginRight: 10,
    width: '90%',
  },
  priceProducttxt: {
    color: Dark,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    width: 100,
  },
  oldPriceProducttxt: {
    color: text_grey,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    width: 100,
  },
  cutline: {
    textDecorationLine: 'line-through',
    paddingRight: 10,
  },
  discountStyle: {
    backgroundColor: '#4284fc',
    borderColor: transparent,
    borderRadius: 10,
    paddingLeft: 5,
    fontSize: FONT_SIZE_h8,
    color: white,
    width: '50%',
    height: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  productNameStyle: {
    fontFamily: FONT_ROBOTO,
    fontSize: 15,
    color: Dark,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10,
  },
  descTitleStyle: {
    fontFamily: FONT_KARLA,
    fontSize: 16,
    fontWeight: 'bold',
  },
  descTextstyle: {
    fontFamily: FONT_KARLA,
    fontSize: 15,
    color: text_grey,
    width: '100%',
    marginTop: 10,
  },
  cardConatinerStyle: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 5,
  },
  addToCartButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
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
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityBtnContainer: {
    flexDirection: 'row',
    width: 110,
    borderColor: button_backgroun,
    borderRadius: 30,
    backgroundColor: white,
    borderWidth: 1,
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

export default styles;
