import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import CashMoneyIcon from '../Assets/icons/CashMoneyIcon';
import VisaIcon from '../Assets/icons/VisaIcon';
import {Dark, text_grey} from '../Assets/themes/colors';
import CardCheckout from './CardCheckout';
import AngleRightIcon from '../Assets/icons/AngleRightIcon';
export const PaymentMethod = props => {
  return (
    <CardCheckout style={props.cardBorder}>
      <View style={styles.headingContainer_payment}>
        <CashMoneyIcon wid={30} hei={23} />
        <Text style={styles.textHeding}>{props.headingText}</Text>
      </View>
      <View style={styles.payment_metho_main_Container}>
        {/* <View style={styles.payment_methods_Container}>
                <CashMoneyIcon wid={30} hei={23} />
                    <Text style={styles.pay_method_text}>
                        Cash on Delivery
                    </Text>

                </View> */}
        <View style={styles.payment_methods_Container_arrow}>
          <View style={styles.pay_Container}>
            <CashMoneyIcon wid={30} hei={23} />
            <Text style={styles.pay_method_text}>Cash on Delivery</Text>
          </View>
          {props.iconNamefirst}
        </View>
        {/* {props.iconName} */}
        <TouchableOpacity
          style={styles.payment_methods_Container_arrow}
          onPress={props.onPressPayment}>
          <View style={styles.pay_Container}>
            <VisaIcon />
            <Text style={styles.pay_method_text}>Credit or Debit Card</Text>
          </View>
          {props.iconNamesecond}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.payment_methods_Container_arrow}
          onPress={props.onPressPayment}>
          <View style={styles.pay_Container}>
            <Image
              source={require('../Assets/images/jazzcash.png')}
              style={styles.jazzcashIcon}
            />
            <Text style={styles.pay_method_text}>Jazz Cash</Text>
          </View>
          {props.iconNamethird}
          {/* <AngleRightIcon /> */}
        </TouchableOpacity>
      </View>
    </CardCheckout>
  );
};

const styles = StyleSheet.create({
  headingContainer_payment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  jazzcashIcon: {
    width: 32,
    height: 18,
  },
  payment_metho_main_Container: {
    paddingTop: 20,
    paddingBottom: 15,
    marginHorizontal: 15,
  },
  payment_methods_Container_arrow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    justifyContent: 'space-between',
    borderBottomColor: text_grey,
  },
  payment_methods_Container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: text_grey,
  },
  pay_Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pay_method_text: {
    fontSize: 14,
    color: Dark,
    paddingLeft: 10,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
  textHeding: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'roboto',
    color: Dark,
    marginLeft: 10,
  },
});

export default PaymentMethod;
