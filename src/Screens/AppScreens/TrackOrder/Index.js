import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from './style';
import {
  button_backgroun,
  primary_brand,
  primary_brand_dark,
  primary_Color,
  white,
} from '../../../Assets/themes/colors';
import CustomHeader from '../../../Components/CustomHeader';

import BackArrowIcon from '../../../Assets/icons/BackArrow';
import CardCheckout from '../../../Components/CardCheckout';
import {GradientBtn} from '../../../Components/GradientBtn';

const TrackOrder = props => {
  const BackPressAction = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomHeader
          leftIcon={<BackArrowIcon iconColor={button_backgroun} />}
          headerTitle="Track Order"
          bgColor={white}
          onBackPress={BackPressAction}
        />
      </View>
      <ScrollView style={styles.cardContainer}>
        <CardCheckout>
          <View style={styles.statusContainer}>
            <Text style={styles.statusHeading}>Order Status: </Text>
            <Text style={styles.statusDetails}>Order Confirmed</Text>
          </View>

          <View style={styles.statusContainer}>
            <Text style={styles.statusHeading}>Order#: </Text>
            <Text style={styles.statusDetails}>1039403</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.statusHeading}>Delivery Time Slot: </Text>
            <Text style={styles.statusDetails}>09:00 - 10:00 AM</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.statusHeading}>Delivery Date: </Text>
            <Text style={styles.statusDetails}>Tomorrow</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.statusHeading}>Payment Mode: </Text>
            <Text style={styles.statusDetails}>Cod</Text>
          </View>

          <View style={styles.btnContainer}>
            <GradientBtn
              name="Cancel"
              first_Gradient_Color={primary_Color}
              second_Gradient_Color={primary_Color}
              third_Gradient_Color={primary_brand_dark}
              txetColor={white}
            />
          </View>
        </CardCheckout>

        <CardCheckout>
          <Text style={styles.boxheading}>Contact Us</Text>
          <Text style={styles.contactDetails}>
            if you have any query. Feel free to contact us
          </Text>
          <View style={styles.contactDetailContainer}>
            <Text style={styles.statusHeading}>Number#: </Text>
            <Text style={styles.boxheading}>(042-45930291-3)</Text>
          </View>

          <View style={styles.contactDetailContainer}>
            <Text style={styles.statusHeading}>Email#: </Text>
            <Text style={styles.boxheading}>(info@easygrocer.com)</Text>
          </View>
        </CardCheckout>
      </ScrollView>
    </View>
  );
};

export default TrackOrder;
