import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CalenderIcon from '../Assets/icons/CalenderIcon';
import ClockIcon from '../Assets/icons/ClockIcon';
import PencilIcon from '../Assets/icons/PencilIcon';
import {
  button_backgroun,
  Dark,
  text_grey,
  white,
} from '../Assets/themes/colors';
import CardCheckout from './CardCheckout';

export const CategoryCard = props => {
  return (
    <View
      style={styles.ctgContainermain}
      onPress={() => {
        props.onPress;
      }}>
      <View>{props.categoryIcon}</View>

      {/* <Image source={props.CategoryImguri} style={styles.imgctg} /> */}
      <Text style={styles.ctgText}>{props.CategoryText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imgctg: {
    width: 50,
    height: 50,
  },
  ctgText: {
    fontSize: 18,
    color: Dark,
    paddingTop: 5,
  },
  ctgContainermain: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: white,
    borderBottomColor: Dark,
    borderBottomWidth: 0.5,
  },
});

export default CategoryCard;
