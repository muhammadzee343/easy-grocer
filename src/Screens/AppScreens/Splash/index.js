import React, {useEffect} from 'react';
import {Image, View} from 'react-native';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('maps');
    }, 1000);
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{height: 200, width: 300}}
        source={require('../../../Assets/images/final_logo.png')}
      />
    </View>
  );
};

export default SplashScreen;
