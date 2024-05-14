import * as React from 'react';
import {DefaultTheme, TextInput} from 'react-native-paper';
import {white} from '../Assets/themes/colors';

const CustomInputPaper = props => {
  return (
    <TextInput
      label={props.label}
      value={props.value}
      placeholderTextColor={props.placeholderTextColor}
      onChangeText={text => {
        props.onChangeText(text);
      }}
      keyboardType={props.keyboardType ? props.keyboardType : 'default'}
      editable={props.isEditable ? props.isEditable : true}
      autoCapitalize={props.autoCapitalize ? props.autoCapitalize : 'sentences'}
      autoCorrect={props.autoCorrect ? props.autoCorrect : true}
      autoFocus={props.autoFocus ? props.autoFocus : false}
      clearTextOnFocus={props.clearTextOnFocus ? props.clearTextOnFocus : false}
      keyboardAppearance={
        props.keyboardAppearance ? props.keyboardAppearance : 'default'
      }
      secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
      textAlign={props.textAlign ? props.textAlign : 'left'}
      style={{
        width: '90%',
        paddingLeft: 10,
        backgroundColor: 'transparent',
      }}
      mode={'flat'}
      theme={{
        ...DefaultTheme,

        colors: {
          placeholder: 'white',
          text: 'white',
          primary: 'white',
          underlineColor: 'transparent',
          background: '#003489',
          favorite: '#BADA55',
        },
      }}
      // selectionColor="red"
      underlineColor={white}
    />
  );
};

export default CustomInputPaper;
