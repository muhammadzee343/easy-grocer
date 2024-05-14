import React, {useState} from 'react';
import {Text, TouchableOpacity, View, Alert} from 'react-native';
import VisacardIcon from '../../../Assets/icons/VisaIcon';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import PaymentInput from '../../../Components/PaymentInput';
import styles from './style';
import ProceedIcon from '../../../Assets/icons/PorceedIcon';
import {
  button_backgroun,
  Dark,
  primary_brand,
  primary_brand_dark,
  primary_Color,
  white,
} from '../../../Assets/themes/colors';
import {GradientBtn} from '../../../Components/GradientBtn';
import CustomHeader from '../../../Components/CustomHeader';
import BackArrowIcon from '../../../Assets/icons/BackArrow';

const Payment = props => {
  const [cardNo, setCardNo] = useState('');
  const [selectedDate, setselectedDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [csv, setCSV] = useState('');
  const [saveStatus, setSaveStatus] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleDate = date => {
    setselectedDate(moment(date).format('MM/YY'));
    hideDatePicker();
  };
  const onChangeCardNo = value => {
    setCardNo(value);
  };
  const onChangeCSV = value => {
    setCSV(value);
  };
  const onSaveStatusAction = value => {
    setSaveStatus(!saveStatus);
  };
  const handleProceedOnPress = () => {
    Alert.alert('Payment Status', 'Card add successfully', [
      {text: 'Ok', onPress: () => console.log('OK Pressed')},
    ]);
  };
  const BackIconPressAction = () => {
    props.navigation.goBack();
  };
  return (
    <View>
      <CustomHeader
        leftIcon={<BackArrowIcon iconColor={Dark} />}
        headerTitle="Payment"
        onBackPress={BackIconPressAction}
        bgColor={white}
      />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <VisacardIcon />
          <Text style={styles.titleTextStyle}>Credit or Debit Card</Text>
        </View>
        <PaymentInput
          label={'Card Number'}
          value={cardNo}
          onChangeText={onChangeCardNo}
          keyboardType={'numeric'}
          customWidth={'100%'}
          lengthNumeric={100}
        />
        <View>
          <View style={styles.cardInfoContainer}>
            <PaymentInput
              label={'YY/MM'}
              value={selectedDate}
              onFocus={showDatePicker}
              keyboardType={'numeric'}
              customWidth={'30%'}
              lengthNumeric={50}
            />
            <PaymentInput
              label={'CSV'}
              value={csv}
              lengthNumeric={3}
              onChangeText={onChangeCSV}
              keyboardType={'numeric'}
              customWidth={'27%'}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleDate}
              onCancel={hideDatePicker}
              // minimumDate={new Date()}
              // maximumDate={new Date()}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.saveCardStatus}
          onPress={onSaveStatusAction}>
          <View
            style={
              saveStatus === true
                ? styles.selectedRadioboxStyle
                : styles.unSelectedRadioboxStyle
            }
          />
          <Text style={{color:Dark}}>Save my card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.processBtnContainer}
          onPress={handleProceedOnPress}>
          <GradientBtn
            name="PROCEED"
            squareWithCenter
            customWidth={'70%'}
            squareBtnRightIcon={<ProceedIcon iconColor={white} />}
            customHeight={50}
            first_Gradient_Color={primary_Color}
            second_Gradient_Color={primary_Color}
            third_Gradient_Color={primary_brand_dark}
            txetColor={white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;
