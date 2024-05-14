import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Dark,
  primary_brand,
  primary_brand_dark,
  transparent,
  white,
} from '../Assets/themes/colors';
import {
  FONT_ROBOTO,
  FONT_SIZE_11,
  FONT_SIZE_h10,
  FONT_SIZE_h3,
  FONT_SIZE_h4,
  FONT_SIZE_h8,
} from '../Assets/themes/fonts';

export const GradientBtn = ({
  name,
  smallBtn,
  customWidth,
  customHeight,
  squareWithCenter,
  squareBtnRightIcon,
  first_Gradient_Color,
  second_Gradient_Color,
  third_Gradient_Color,
  txetColor,
}) => (
  <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 1.2, y: 0}}
    colors={[first_Gradient_Color, second_Gradient_Color, third_Gradient_Color]}
    style={
      squareWithCenter
        ? [
            styles.squareWithCenterBtnStyle,
            {
              height: customHeight ? customHeight : 40,
              width: customWidth ? customWidth : '50%',
            },
          ]
        : [
            styles.btnStyle,
            {
              height: customHeight ? customHeight : 40,
              width: customWidth ? customWidth : '50%',
            },
          ]
    }>
    <Text
      style={
        smallBtn
          ? [styles.smallBtnStyle, {color: txetColor ? txetColor : white}]
          : [styles.cartBtnStyle, {color: txetColor ? txetColor : Dark}]
      }>
      {name}
    </Text>
    <View style={{width: 40, position: 'absolute', right: 0, marginRight: 10}}>
      {squareBtnRightIcon ? squareBtnRightIcon : null}
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  squareWithCenterBtnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: transparent,
    borderRadius: 15,
    flexDirection: 'row',
  },
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: transparent,
    // borderRadius: 20,
  },
  cartBtnStyle: {
    textAlign: 'center',
    color: Dark,
    fontSize: FONT_SIZE_h3,
    fontFamily: FONT_ROBOTO,
  },
  smallBtnStyle: {
    // fontSize: FONT_SIZE_h4,
    fontFamily: FONT_ROBOTO,
    fontFamily: FONT_ROBOTO,
    fontSize: FONT_SIZE_h10,
    paddingRight: 10,
  },
});
