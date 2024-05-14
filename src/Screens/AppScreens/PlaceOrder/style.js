import React from 'react';
import {StyleSheet} from 'react-native';
import {Dark, text_grey, white} from '../../../Assets/themes/colors';

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
    marginBottom: 110,
    marginTop: 10,
  },
  textheading: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'roboto',
    color: Dark,
  },
  headingContainer_delivery: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressContainer: {
    paddingVertical: 30,
    marginHorizontal: 45,
  },
  addressText: {
    fontSize: 16,
    color: text_grey,
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
    height: 60,
    backgroundColor: white,
  },
});

export default styles;
