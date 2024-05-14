import React from 'react';
import { View, Text, StyleSheet, Button, StatusBar, Image } from 'react-native';
import {Dark, text_grey, white} from '../Assets/themes/colors';


export const CardCheckout = (props) => {
    return (
               
         
        <View style={{...styles.deliveryContainer, ...props.style}}>
           <View style={props.styles}>{props.children}</View>

        </View>
        

    );

}


const styles = StyleSheet.create({
    
    deliveryContainer: {
        marginVertical: 10,
        backgroundColor:white,
        borderRadius: 10,
        elevation: 9,
        padding: 20,
        marginHorizontal: 10,
        shadowColor:text_grey,


    },
   


});


export default CardCheckout