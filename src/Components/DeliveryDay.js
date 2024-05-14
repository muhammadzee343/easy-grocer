import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CalenderIcon from '../Assets/icons/CalenderIcon';
import ClockIcon from '../Assets/icons/ClockIcon';
import PencilIcon from '../Assets/icons/PencilIcon';
import {button_backgroun, Dark} from '../Assets/themes/colors';
import CardCheckout from './CardCheckout';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

export const Deliveryaddress = props => {
  const [selectedDate, setselectedDate] = useState('Today');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleDate = date => {
    setselectedDate(moment(date).format('DD/MM/YY'));
    hideDatePicker();
  };
  return (
    <CardCheckout>
      <View>
        <View style={styles.headingContainer_delivery}>
          <CalenderIcon wid={20} hei={20} />
          <Text style={styles.textHeading}>Delivery Day</Text>
        </View>
        <TouchableOpacity style={styles.daysdropdown} onPress={showDatePicker}>
          <Text style={styles.txttime}>{selectedDate}</Text>

          <PencilIcon />
        </TouchableOpacity>
        <View style={styles.headingContainer_delivery}>
          <ClockIcon wid={20} hei={20} />
          <Text style={styles.textHeading}>Delivery Window</Text>
        </View>
        <View style={styles.daysdropdown}>
          <Text style={styles.txttime}>10:00 - 11:30 PM</Text>
          <PencilIcon />
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDate}
          onCancel={hideDatePicker}
          minimumDate={new Date()}
          // maximumDate={new Date()}
        />
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
  daysdropdown: {
    marginHorizontal: 10,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: button_backgroun,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  txttime: {
    color: button_backgroun,
    fontFamily: 'karla',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'roboto',
    color: Dark,
    marginLeft: 10,
  },
});

export default Deliveryaddress;
