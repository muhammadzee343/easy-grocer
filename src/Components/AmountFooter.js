import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {white} from '../Assets/themes/colors';
import {FONT_SIZE_h1} from '../Assets/themes/fonts';

const AmountFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Total</Text>
      <Text style={styles.textStyle}>RS.591</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  textStyle: {
    fontSize: FONT_SIZE_h1,
    color: white,
    fontWeight: 'bold',
  },
});

export default AmountFooter;
