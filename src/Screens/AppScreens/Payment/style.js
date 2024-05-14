import React from 'react';
import {StyleSheet} from 'react-native';
import {Dark, primary_brand_dark, white} from '../../../Assets/themes/colors';

const styles = StyleSheet.create({
  selectedRadioboxStyle: {
    height: 15,
    width: 15,
    borderColor: primary_brand_dark,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: primary_brand_dark,
  },
  unSelectedRadioboxStyle: {
    height: 15,
    width: 15,
    borderColor: Dark,
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
  },
  processBtnContainer: {
    // margin: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  container: {
    margin: 10,
    backgroundColor: white,
    padding: 10,
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTextStyle: {
    marginLeft: 10,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveCardStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 30,
    marginTop: 20,
  },
});

export default styles;
