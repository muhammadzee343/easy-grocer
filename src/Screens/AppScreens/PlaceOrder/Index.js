import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import BackArrowIcon from '../../../Assets/icons/BackArrow';
import LocationIcon from '../../../Assets/icons/LocationIcon';
import {
  button_backgroun,
  Dark,
  primary_brand_dark,
  primary_Color,
  white,
} from '../../../Assets/themes/colors';
import CardCheckout from '../../../Components/CardCheckout';
import CustomHeader from '../../../Components/CustomHeader';
import styles from './style';
import MapEditIcon from '../../../Assets/icons/mapEditIcon';
import OrderSummaryBox from '../../../Components/OrderSummaryBox';

import DeliveryDay from '../../../Components/DeliveryDay';
import PaymentMethod from '../../../Components/PaymentMethod';
import AngleRightIcon from '../../../Assets/icons/AngleRightIcon';
import AmountFooter from '../../../Components/AmountFooter';
import {GradientBtn} from '../../../Components/GradientBtn';
import {TouchableOpacity} from 'react-native';

const placeOrder = props => {
  const BackPressAction = () => {
    props.navigation.goBack();
  };
  const onPressPlaceOrder = () => {
    props.navigation.navigate('complete');
  };
  const onPressPayment = () => {
    props.navigation.navigate('payment');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomHeader
          leftIcon={<BackArrowIcon iconColor={button_backgroun} />}
          headerTitle="Checkout"
          bgColor={white}
          onBackPress={BackPressAction}
        />
      </View>
      <ScrollView style={styles.cardContainer}>
        <CardCheckout>
          <View style={styles.headingContainer_delivery}>
            <View style={styles.headingContainer}>
              <LocationIcon iconColor={button_backgroun} wid={24} hei={28} />
              <Text style={styles.textheading}>Your Delivery Address</Text>
            </View>
            <MapEditIcon wid={24} hei={17} />
          </View>

          <View style={styles.addressContainer}>
            <Text style={styles.addressText}>
              Plot 31, Block A Bankers Town, Sheikhupura
            </Text>
          </View>
        </CardCheckout>

        <PaymentMethod
          headingText="Select Payment Method"
          iconNamesecond={
            <AngleRightIcon iconColor={button_backgroun} wid={20} hei={20} />
          }
          iconNamethird={
            <AngleRightIcon iconColor={button_backgroun} wid={20} hei={20} />
          }
          onPressPayment={onPressPayment}
        />
        <DeliveryDay />

        <OrderSummaryBox />
      </ScrollView>
      <View style={styles.footerContainer}>
        <AmountFooter />
      </View>
      <TouchableOpacity
        style={styles.placeOrderContainer}
        activeOpacity={0.8}
        onPress={onPressPlaceOrder}>
        <GradientBtn
          name="Place Order"
          squareWithCenter
          customWidth={'70%'}
          customHeight={50}
          first_Gradient_Color={primary_Color}
          second_Gradient_Color={primary_Color}
          third_Gradient_Color={primary_brand_dark}
          txetColor={white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default placeOrder;
