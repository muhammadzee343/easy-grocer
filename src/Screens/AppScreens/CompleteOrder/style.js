import React from 'react';
import {StyleSheet} from 'react-native';

import {text_grey, white, Dark} from '../../../Assets/themes/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.1,
  },
  cardContainer: {
    flex: 0.7,
    width: '100%',
  },
  cardCheckoutContainer: {
    marginVertical: 0,
    backgroundColor: white,
    borderRadius: 0,
    elevation: 8,
    padding: 20,
    marginHorizontal: 0,
    shadowColor: text_grey,
  },
  boxContainerflex: {
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection:'row',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: text_grey,
  },
  headingTxtBox: {
    fontFamily: 'roboto',
    fontSize: 20,
    color: Dark,
    paddingVertical: 5,
    fontWeight: '900',
  },
  valueTxtHeadingBox: {
    fontSize: 18,
    color: text_grey,
    fontFamily: 'karla',
    fontWeight: '600',
    textAlign: 'center',
  },

  btnContainerDone: {
    backgroundColor: white,
    elevation: 8,

    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
  },
  placeOrderContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    // backgroundColor: white,
  },
});

export default styles;
