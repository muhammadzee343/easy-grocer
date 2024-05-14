
import React from 'react';
import { StyleSheet } from 'react-native';
import {
    button_backgroun,
    Dark,
    primary_brand_dark,
    white,
} from '../../../Assets/themes/colors';
import { FONT_ROBOTO } from '../../../Assets/themes/fonts';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        borderRadius: 10,
        margin: 10,
    },
    titleStyle: {
        width: '100%',
        fontFamily: FONT_ROBOTO,
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        color: button_backgroun,
        marginTop: 20,
    },
    inputAreaContainer: {
        flex: 0.8,
        marginTop: 30,
    },
    genderContainer: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 10
    },
    genderTextStyle: {
        marginLeft: 10,
        color: Dark,
    },
    radioboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 30,
    },
    saveBtnContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
        marginBottom: 10,
        marginTop:10,
    },
    selectedRadioboxStyle: {
        height: 15,
        width: 15,
        borderColor: primary_brand_dark,
        borderWidth: 1,
        borderRadius: 8,
        marginRight: 10,
        backgroundColor: primary_brand_dark,
    },
    unSelectedRadioboxStyle: {
        height: 15,
        width: 15,
        borderColor: Dark,
        borderWidth: 1,
        borderRadius: 8,
        marginRight: 10,
    },
});
export default styles;