import * as React from 'react';
import {DefaultTheme, TextInput} from 'react-native-paper';
import {Dark, white} from '../Assets/themes/colors';

const PaymentInput = props => {
  return (
    <TextInput
      label={props.label}
      value={props.value}
      maxLength={props.lengthNumeric}
      placeholderTextColor={Dark}
      onChangeText={text => {
        props.onChangeText(text);
      }}
      onFocus={props.onFocus ? props.onFocus : null}
      keyboardType={props.keyboardType ? props.keyboardType : 'numeric'}
      style={{
        width: props.customWidth ? props.customWidth : '90%',
        paddingLeft: 10,
        backgroundColor: 'transparent',
        marginTop: 30,
      }}
      mode={'flat'}
      theme={{
        ...DefaultTheme,
        colors: {
          placeholder: Dark,
          text: Dark,
          primary: Dark,
          background: 'transparent',
          favorite: Dark,
        },
      }}
      // selectionColor="red"
      underlineColor={Dark}
    />
  );
};

export default PaymentInput;
