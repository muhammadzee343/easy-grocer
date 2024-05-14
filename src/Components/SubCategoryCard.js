import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Dark} from '../Assets/themes/colors';

export const SubCategoryCard = props => {
  return (
    <View style={styles.subctgContainermain}>
      <Image source={props.subCategoryImguri} style={styles.imgsubctg} />
      <Text style={styles.subctgText}>{props.subCategoryText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imgsubctg: {
    width: 120,
    height: 120,
    // elevation:8,
    // shadowColor:Dark,
  },
  subctgText: {
    fontSize: 18,
    color: Dark,
    paddingTop: 10,
  },
  subctgContainermain: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    marginHorizontal: 5,
  },
});

export default SubCategoryCard;
