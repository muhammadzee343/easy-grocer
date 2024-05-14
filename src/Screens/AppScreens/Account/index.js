import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import BackArrowIcon from '../../../Assets/icons/BackArrow';
import CartIcon from '../../../Assets/icons/CartIcon';
import LogoutIcon from '../../../Assets/icons/LogoutIcon';
import OrderIcon from '../../../Assets/icons/OrderIcon';
import ProfileIcon from '../../../Assets/icons/ProfileIcon';
import ShoppingListIcon from '../../../Assets/icons/ShoppingListIcon';
import TrackOrderIcon from '../../../Assets/icons/TrackOrderIcon';
import WalletIcon from '../../../Assets/icons/WalletIcon';
import {button_backgroun, Dark, white} from '../../../Assets/themes/colors';
import AccountCard from '../../../Components/AccountCard';
import CustomHeader from '../../../Components/CustomHeader';

export default function Account(props) {
  const BackPressAction = () => {
    props.navigation.goBack();
  };
  const promotion_array = [
    {
      id: 1,
      leftIcon: <WalletIcon iconColor={button_backgroun} />,
      colorCode: '#B9FCBB',
      title: 'Wallet',
      onPress: () => props.navigation.navigate('MyWallet'),
    },
    {
      id: 2,
      leftIcon: <OrderIcon iconColor={'#16718E'} />,
      colorCode: '#CAECFF',
      title: 'My Orders',
      onPress: () => props.navigation.navigate('MyOrders'),
    },
    {
      id: 3,
      leftIcon: <ProfileIcon iconColor={button_backgroun} />,
      colorCode: '#C5FEC7',
      title: 'My Profile',
      onPress: () => props.navigation.navigate('profile'),
    },
    // {
    //   id: 4,
    //   leftIcon: <ShoppingListIcon iconColor={button_backgroun} />,
    //   title: 'Shopping List',
    //   onPress: () => props.navigation.navigate('MyWallet'),
    // },
    {
      id: 5,
      leftIcon: <CartIcon iconColor={'#CA8012'} />,
      colorCode: '#FEE5BE',
      title: 'Save Cart',
      onPress: () => props.navigation.navigate('addToCart'),
    },
    {
      id: 6,
      leftIcon: <TrackOrderIcon iconColor={'#0F881B'} />,
      colorCode: '#C3FCC5',
      title: 'Track Your Order',
      onPress: () => props.navigation.navigate('trackOrder'),
    },
    {
      id: 7,
      leftIcon: <LogoutIcon iconColor={'#1D9FA7'} />,
      colorCode: '#C1FBFB',
      title: 'Log Out',
      onPress: () => props.navigation.navigate('Login'),
    },
  ];

  return (
    <View style={{flex: 1}}>
      {/* <View style={{flex: 0.1}}> */}
      <CustomHeader
        leftIcon={<BackArrowIcon iconColor={Dark} />}
        headerTitle="Accounts"
        onBackPress={BackPressAction}
        bgColor={white}
      />
      {/* </View> */}
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: white,
          marginLeft: 7,
          marginRight: 7,
        }}>
        {promotion_array.map((item, index) => {
          return (
            <View key={item.id} style={{flex: 1}}>
              <AccountCard
                leftIcon={item.leftIcon}
                styleColor={item.colorCode}
                title={item.title}
                onPress={item.onPress}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
