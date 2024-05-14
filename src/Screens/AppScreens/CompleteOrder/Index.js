import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import styles from './style';
import {
  button_backgroun,
  Dark,
  primary_brand,
  primary_brand_dark,
  primary_Color,
  white,
} from '../../../Assets/themes/colors';
import CustomHeader from '../../../Components/CustomHeader';
import BackArrowIcon from '../../../Assets/icons/BackArrow';
import CashMoneyIcon from '../../../Assets/icons/CashMoneyIcon';
import ClockIcon from '../../../Assets/icons/ClockIcon';
import CalenderIcon from '../../../Assets/icons/CalenderIcon';
import LocationIcon from '../../../Assets/icons/LocationIcon';
import CustomCompleteOrder from '../../../Components/CustomCompleteOrder';
import {GradientBtn} from '../../../Components/GradientBtn';

const orderArray = [
  {
    id: '1',
    iconName: <CashMoneyIcon wid={29} hei={28} />,
    orderHeading: 'Total Cost',
    orderValue: 'Rs. 591',
  },
  {
    id: '2',
    iconName: <ClockIcon wid={28} hei={28} />,
    orderHeading: 'Estimated Delivery Time',
    orderValue: 'Rs. 591',
  },
  {
    id: '3',
    iconName: <CalenderIcon wid={26} hei={26} />,
    orderHeading: 'Delivery Date',
    orderValue: 'Rs. 591',
  },
  {
    id: '4',
    iconName: <LocationIcon iconColor={button_backgroun} wid={32} hei={28} />,
    orderHeading: 'Location',
    orderValue: 'Plot A , Khalid Road , District Sheikhupura Punjab Pakistan',
  },
];

const CompleteOrder = props => {
  const BackPressAction = () => {
    props.navigation.goBack();
  };
  const onPressDone = () => {
    props.navigation.navigate('home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <CustomHeader
        bgColor={white}
          leftIcon={<BackArrowIcon iconColor={button_backgroun} />}
          headerTitle="Complete"
          onBackPress={BackPressAction}
        />
      </View>
      <ScrollView style={styles.cardContainer}>
        <View style={styles.cardCheckoutContainer}>
          <View style={styles.boxContainerflex}>
            <View style={styles.imgContainer}>
              <Image source={require('../../../Assets/images/logo.png')} />
            </View>
            <View>
              <Text style={styles.headingTxtBox}>Thanks for Your Order</Text>
              <Text style={styles.valueTxtHeadingBox}>
                Read Your Details Below
              </Text>
            </View>
          </View>

          {orderArray.map(orderData => {
            return (
              <CustomCompleteOrder
                key={orderData.id}
                iconboxes={orderData.iconName}
                textHeadingboxes={orderData.orderHeading}
                textvalueHeading={orderData.orderValue}
              />
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.placeOrderContainer}
        activeOpacity={0.8}
        onPress={onPressDone}>
        <GradientBtn
          name="Done"
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

export default CompleteOrder;
