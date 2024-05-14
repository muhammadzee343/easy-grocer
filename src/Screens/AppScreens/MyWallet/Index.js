import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackArrowIcon from '../../../Assets/icons/BackArrow';
import CashMoneyIcon from '../../../Assets/icons/CashMoneyIcon';
import HandCashIcon from '../../../Assets/icons/HandCashIcon';
import {button_backgroun, Dark, text_grey, white} from '../../../Assets/themes/colors';
import CardCheckout from '../../../Components/CardCheckout';
import CustomHeader from '../../../Components/CustomHeader';
import styles from './style';
import PlusIcon from '../../../Assets/icons/HandCash';
import TickIcon from '../../../Assets/icons/TickIcon';

import PaymentMethod from '../../../Components/PaymentMethod';

const MyWallet = props => {
  const BackPressAction = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomHeader
          leftIcon={<BackArrowIcon iconColor={Dark} />}
          headerTitle="My Wallet"
          onBackPress={BackPressAction}
          bgColor={white}
        />
      </View>
      <ScrollView style={styles.cardContainer}>
        <CardCheckout>
          <View style={styles.boxContainer}>
            <Text style={styles.priceHeading}>Rs. 20</Text>
            <HandCashIcon iconColor={button_backgroun} wid={40} hei={44} />
            <Text style={styles.priceText}>Current Wallet Balance</Text>
          </View>
        </CardCheckout>
        <CardCheckout>
          <View style={styles.headingContainer_delivery}>
            <View style={styles.headingContainer}>
              <CashMoneyIcon wid={30} hei={34} />
              <Text style={styles.textheading}>Cards</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('payment');
              }}
              activeOpacity={0.7}>
              <PlusIcon iconColor={button_backgroun} wid={27} hei={18} />
            </TouchableOpacity>
          </View>
          <View style={styles.addCardContainer}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('payment');
              }}
              activeOpacity={0.7}>
              <PlusIcon iconColor={text_grey} wid={24} hei={16} />
            </TouchableOpacity>
            <Text style={styles.cardText}>
              Add a card to enjoy a seamless payments experience
            </Text>
          </View>
        </CardCheckout>

        <PaymentMethod
          cardBorder={{...styles.borderDesignCard}}
          headingText="Current Payment Methods"
          iconNamefirst={
            <TickIcon iconColor={button_backgroun} wid={15} hei={15} />
          }
          iconNamesecond={
            <TickIcon iconColor={button_backgroun} wid={15} hei={15} />
          }
          iconNamethird={
            <TickIcon iconColor={button_backgroun} wid={15} hei={15} />
          }
        />
      </ScrollView>
    </View>
  );
};

export default MyWallet;
