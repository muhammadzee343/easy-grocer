import React from 'react';
import {StyleSheet} from 'react-native';
import {
  button_backgroun,
  Dark,
  primary_brand,
  white,
} from '../../../Assets/themes/colors';
import {FONT_ROBOTO} from '../../../Assets/themes/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: primary_brand,
  },
  headerContainer: {
    // flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  headerTextStyle: {
    fontFamily: FONT_ROBOTO,
    fontSize: 40,
    color: white,
  },
  decriptionContianer: {
    // flex: 0.67,
    // backgroundColor: white,
    borderTopLeftRadius: 70,
  },
  titleTextStyle: {
    fontFamily: FONT_ROBOTO,
    fontSize: 28,
    color: white,
    marginTop: 15,
    fontWeight: 'bold',
  },
  processBtnContainer: {
    margin: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  footerContainer: {
    height: 50,
    backgroundColor: Dark,
    opacity: 0.8,
  },
});

export default styles;
