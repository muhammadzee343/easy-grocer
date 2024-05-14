import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import OrderReciept from '../Assets/icons/OrderReciept';
import {Dark, text_grey, button_backgroun} from '../Assets/themes/colors';
import {FONT_KARLA, FONT_ROBOTO} from '../Assets/themes/fonts';
import CardCheckout from './CardCheckout';

const order_summary_array = [
  {id: '1', productName: 'Coke', productQuantity: '3', productPrice: '225'},
  {id: '2', productName: 'Potato', productQuantity: '2', productPrice: '128'},
  {
    id: '3',
    productName: 'Dawn Bread Large',
    productQuantity: '1',
    productPrice: '114',
  },
  {id: '4', productName: 'Peas', productQuantity: '1', productPrice: '114'},
  {
    id: '5',
    productName: 'Green Chili',
    productQuantity: '2',
    productPrice: '140',
  },
];

export const OrderSummaryBox = () => {
  return (
    <CardCheckout>
      <View style={styles.headingContainer_delivery}>
        <OrderReciept />
        <Text style={styles.textHeading}> Order Summary</Text>
      </View>

      <View style={styles.summaryContainer}>
        {order_summary_array.map(orderItem => {
          return (
            <View style={styles.summaryTextContainer} key={orderItem.id}>
              <Text style={styles.summaryText}>
                {orderItem.productQuantity}x {orderItem.productName}
              </Text>
              <Text style={styles.priceText}> Rs.{orderItem.productPrice}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.pricingContainer}>
        <View style={styles.summaryTextContainer}>
          <Text style={styles.pricingTextHeading}>SubTotal</Text>
          <Text style={styles.priceTextMain}> Rs.142</Text>
        </View>

        <View style={styles.summaryTextContainer}>
          <Text style={styles.pricingTextHeading}>Discount</Text>
          <Text style={styles.priceTextMain}> - Rs.200</Text>
        </View>

        <View style={styles.summaryTextContainer}>
          <Text style={styles.pricingTextHeading}>Delivery Fee</Text>
          <Text style={styles.priceTextMain}> Rs.20</Text>
        </View>
      </View>
    </CardCheckout>
  );
};

const styles = StyleSheet.create({
  headingContainer_delivery: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icondelivery: {
    width: 30,
    height: 30,
  },

  summaryContainer: {
    paddingVertical: 15,
    borderBottomColor: text_grey,
    borderBottomWidth: 0.5,
  },
  summaryTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  summaryText: {
    fontSize: 16,
    fontFamily: FONT_KARLA,
    color: Dark,
  },
  priceText: {
    fontFamily: FONT_KARLA,
    fontWeight: 'bold',
    fontSize: 16,
    color: Dark,
  },

  pricingContainer: {
    paddingVertical: 10,
  },
  pricingTextHeading: {
    fontSize: 16,
    fontFamily: FONT_KARLA,
    color: button_backgroun,
  },
  priceTextMain: {
    fontFamily: FONT_KARLA,
    fontWeight: 'bold',
    fontSize: 16,
    color: button_backgroun,
  },
  textHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: FONT_ROBOTO,
    color: Dark,
    marginLeft: 10,
  },
});

export default OrderSummaryBox;
