import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Dark, transparent, white} from '../Assets/themes/colors';
import {FONT_ROBOTO, FONT_SIZE_h1} from '../Assets/themes/fonts';
import SearchBarScreen from './SearchBar';

const CustomHeader = props => {
  return (
    <View style={[styles.container, {backgroundColor: props.bgColor}]}>
      <TouchableOpacity
        style={
          props.leftIcon
            ? styles.leftWithPropsIconConainer
            : styles.leftWithoutPropsIconConainer
        }
        onPress={props.onBackPress}>
        {props.leftIcon ? props.leftIcon : null}
      </TouchableOpacity>
      <View
        style={
          props.headerTitle
            ? styles.headerWithPropsTitleContainer
            : styles.headerWithoutPropsTitleContainer
        }>
        {props.headerTitle ? (
          <Text
            style={[
              styles.headerTextStyle,
              {color: props.titleColor ? props.titleColor : Dark},
            ]}>
            {props.headerTitle}
          </Text>
        ) : (
          <SearchBarScreen />
        )}
      </View>
      <TouchableOpacity
        style={styles.rightIconContainer}
        onPress={
          props.rightIconPressHandle ? props.rightIconPressHandle : () => {}
        }>
        {props.rightIcon ? <Text>{props.rightIcon}</Text> : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  },
  leftWithPropsIconConainer: {
    width: '10%',
    // backgroundColor: 'red',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  leftWithoutPropsIconConainer: {
    width: '2%',
    // backgroundColor: 'gray',
    height: 50,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  headerWithPropsTitleContainer: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    fontFamily: FONT_ROBOTO,
    fontSize: FONT_SIZE_h1,
    // alignItems: 'center',
    marginLeft: 5,
    // backgroundColor: 'red',
  },
  headerWithoutPropsTitleContainer: {
    width: '75%',
    backgroundColor: white,
    height: 50,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  headerTextStyle: {
    fontSize: 16,
    fontFamily: FONT_ROBOTO,
    fontWeight: '700',
  },
  rightIconContainer: {
    width: '10%',
    // backgroundColor: 'green',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
  menuIconContainer: {
    width: '12%',
    // backgroundColor: 'green',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
});

export default CustomHeader;
