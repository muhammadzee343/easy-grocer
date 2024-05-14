import React, {useState} from 'react';

import {TouchableOpacity, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {GradientBtn} from '../../../Components/GradientBtn';
import styles from './style';
import {
  button_backgroun,
  Dark,
  primary_brand,
  primary_brand_dark,
  primary_Color,
  white,
} from '../../../Assets/themes/colors';
import SearchBarScreen from '../../../Components/SearchBar';

const MapsScreen = props => {
  const onPressProceed = () => {
    return props.navigation.navigate('tab');
  };
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>

      <View style={{position: 'absolute', top: 20, width: '80%'}}>
        <SearchBarScreen />
      </View>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={onPressProceed}
        activeOpacity={0.8}>
        <GradientBtn
          name="Proceed"
          customHeight={50}
          customWidth="70%"
          squareWithCenter
          first_Gradient_Color={primary_Color}
          second_Gradient_Color={primary_Color}
          third_Gradient_Color={primary_brand_dark}
          txetColor={white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MapsScreen;
