import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import BucketCart from '../Assets/icons/BucketCart';
import ProfileIcon from '../Assets/icons/ProfileIcon';
import {button_backgroun, Dark, white} from '../Assets/themes/colors';
export default function TabBarButton(props) {
  return (
    <View style={styles.container}>
      {/* <BucketCart iconColor={white} /> */}
       <Image source={require('../Assets/images/cartlogob.png')} style={styles.imgCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50,
    
    bottom: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
  imgCart:{
    width:46,
    height:46,
  }
});
