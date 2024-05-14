import React, {useState} from 'react';
import {Text, TouchableOpacity, View, ScrollView} from 'react-native';
import BackArrowIcon from '../../../Assets/icons/BackArrow';
import CityIcon from '../../../Assets/icons/CityIcon';
import EmailIcon from '../../../Assets/icons/EmailIcon';
import FullnameIcon from '../../../Assets/icons/FullnameIcon';
import GenderIcon from '../../../Assets/icons/GenderIcon';
import LocationIcon from '../../../Assets/icons/LocationIcon';
import PhoneIcon from '../../../Assets/icons/PhoneIcon';
import {
  button_backgroun,
  Dark,
  primary_brand,
  primary_brand_dark,
  primary_Color,
  white,
} from '../../../Assets/themes/colors';
import {FONT_ROBOTO} from '../../../Assets/themes/fonts';
import CustomHeader from '../../../Components/CustomHeader';
import CustomTextInput from '../../../Components/CustomTextInput';
import {GradientBtn} from '../../../Components/GradientBtn';
import styles from './style';
const ProfileScreen = props => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [city, setCity] = useState('Sheikhupura');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('male');
  const onChangeFullname = value => {
    setFullName(value);
  };
  const onChangeEmail = value => {
    setEmail(value);
  };
  const onChangeMobileNumber = value => {
    setMobileNumber(value);
  };
  const onChangeCity = value => {
    setCity(value);
  };
  const onChangeLocation = value => {
    setLocation(value);
  };
  const onMaleGenderAction = value => {
    setGender('male');
  };
  const onFemaleGenderAction = value => {
    setGender('female');
  };
  const BackPressAction = () => {
    props.navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      <CustomHeader
        leftIcon={<BackArrowIcon iconColor={Dark} />}
        headerTitle={'Profile'}
        onBackPress={BackPressAction}
        bgColor={white}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.titleStyle}>Profile</Text>
        <View style={styles.inputAreaContainer}>
          <CustomTextInput
            IconName={<FullnameIcon />}
            title="Full Name:"
            // title="Full Name"
            placeHolder="Smith john"
            isEditable={true}
            autoCorrect={false}
            autoFocus={false}
            onChangeText={onChangeFullname}
            value={fullName}
          />
          <CustomTextInput
            IconName={<EmailIcon />}
            title="Email:"
            // title="Full Name"
            placeHolder="abc@gmail.com"
            isEditable={true}
            autoCorrect={false}
            autoFocus={false}
            onChangeText={onChangeEmail}
            value={email}
          />
          <CustomTextInput
            IconName={<PhoneIcon />}
            title="Mobile Number:"
            // title="Full Name"
            placeHolder="+923108529170"
            isEditable={true}
            autoCorrect={false}
            autoFocus={false}
            onChangeText={onChangeMobileNumber}
            value={mobileNumber}
          />
          <CustomTextInput
            IconName={<CityIcon />}
            title="City:"
            // title="Full Name"
            placeHolder="Sheikhupura"
            isEditable={false}
            // autoCorrect={false}
            // autoFocus={false}
            // onChangeText={onChangeCity}
            value={city}
          />
          <CustomTextInput
            IconName={<LocationIcon iconColor={Dark} wid={23} hei={23} />}
            title="Location:"
            // title="Full Name"
            placeHolder="Susan road, Faisalabad, Punjab"
            isEditable={true}
            autoCorrect={false}
            autoFocus={false}
            onChangeText={onChangeLocation}
            value={location}
          />
          <View style={styles.genderContainer}>
            <GenderIcon />
            <Text style={styles.genderTextStyle}>Gender:</Text>
          </View>
          <View style={{margin: 10, flexDirection: 'row'}}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.radioboxContainer}
              onPress={onMaleGenderAction}>
              <View
                style={
                  gender === 'male'
                    ? styles.selectedRadioboxStyle
                    : styles.unSelectedRadioboxStyle
                }
              />
              <Text style={{color: Dark}}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.radioboxContainer}
              onPress={onFemaleGenderAction}>
              <View
                style={
                  gender === 'female'
                    ? styles.selectedRadioboxStyle
                    : styles.unSelectedRadioboxStyle
                }
              />
              <Text style={{color: Dark}}>Female</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.saveBtnContainer}>
            <GradientBtn
              squareWithCenter
              name="Save"
              customWidth="70%"
              customHeight={60}
              first_Gradient_Color={primary_Color}
              second_Gradient_Color={primary_Color}
              third_Gradient_Color={primary_brand_dark}
              txetColor={white}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default ProfileScreen;
