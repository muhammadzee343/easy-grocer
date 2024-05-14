import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import EyeIcon from '../../../Assets/icons/EyeIcon';
import ProceedIcon from '../../../Assets/icons/PorceedIcon';
import {
  button_backgroun,
  Dark,
  primary_brand,
  primary_brand_dark,
  white,
} from '../../../Assets/themes/colors';
import AuthScreenFooter from '../../../Components/AuthScreenFooter';
import CustomInputPaper from '../../../Components/CustomInputPaper';
import {GradientBtn} from '../../../Components/GradientBtn';
import SquareTextInput from '../../../Components/SquareTextInput';
import styles from './style';

function RegistrationScreen(props) {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordIconStatus, setPasswordIconStatus] = React.useState(false);
  const onChangeEmail = value => {
    setEmail(value);
  };
  const onChangeUserName = value => {
    setUserName(value);
  };
  const onChangeMobileNumber = value => {
    setMobileNumber(value);
  };
  const onChangePassword = value => {
    setPassword(value);
  };
  const handlePasswordIconPress = () => {
    setPasswordIconStatus(!passwordIconStatus);
  };
  const handleOnPress = () => {
    // console.log('navigation', navigation);
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../Assets/images/authBg.png')}
        style={{flex: 1, opacity: 0.7}}
        resizeMode="cover">
        <View style={{backgroundColor: Dark, flex: 1}}>
          <StatusBar backgroundColor={button_backgroun} />
          <View style={styles.headerContainer}>
            <Text style={styles.headerTextStyle}>Logo</Text>
          </View>
          <View style={styles.decriptionContianer}>
            <ScrollView style={{marginTop: 20}}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.titleTextStyle}>Create Your Account</Text>
                <CustomInputPaper
                  label={'Email'}
                  value={email}
                  onChangeText={onChangeEmail}
                  keyboardType={'email-address'}
                  // autoFocus={true}
                />
                <CustomInputPaper
                  label={'UserName'}
                  value={userName}
                  onChangeText={onChangeUserName}
                />
                <CustomInputPaper
                  label={'Mobile Number'}
                  value={mobileNumber}
                  onChangeText={onChangeMobileNumber}
                />
                <CustomInputPaper
                  label={'Password'}
                  value={password}
                  onChangeText={onChangePassword}
                  secureTextEntry={true}
                />
                <TouchableOpacity
                  style={styles.processBtnContainer}
                  activeOpacity={0.8}>
                  <GradientBtn
                    name="GET STARTED"
                    squareWithCenter
                    customWidth={'70%'}
                    squareBtnRightIcon={<ProceedIcon iconColor={Dark} />}
                    customHeight={50}
                    first_Gradient_Color={white}
                    second_Gradient_Color={white}
                    third_Gradient_Color={white}
                  />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <AuthScreenFooter
            userType={'Existing User?'}
            UserAction={'Login'}
            onPress={handleOnPress}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default RegistrationScreen;
