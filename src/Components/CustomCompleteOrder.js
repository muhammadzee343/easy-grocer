import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {
    Dark,
    primary_brand,
    white,
    text_grey
  } from '../Assets/themes/colors';

  const CustomCompleteOrder = props => {
    return (
        
         <View style={styles.boxContainerflex}>
             <View style={styles.headingContainerFlex}>
            
         <View style={styles.iconsContainer}>
             {props.iconboxes}
         </View>
         <Text style={styles.headingTxtBox}>{props.textHeadingboxes}</Text>
         </View>
         <Text style={styles.valueTxtHeadingBox}>{props.textvalueHeading}</Text>

         </View>

    )
  }



  const styles = StyleSheet.create({

boxContainerflex:{
    justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'column',
        paddingVertical:10,
        // borderBottom/Width:0.5,
        // borderBottomColor:text_grey,
},

headingTxtBox:{
    fontFamily:'roboto',
    fontSize:19,
    color:Dark,
    paddingVertical:5,
    marginLeft:10,
    fontWeight:'900',

},
valueTxtHeadingBox:{
    fontSize:18,
    color:text_grey,
    fontFamily:'karla',
    fontWeight:'600',
    textAlign:'center',
},
logoImage:{
    width: 180,
    height: 80,
},
headingContainerFlex:{
    flexDirection:'row',
    alignItems:'center'

}

  });

  export default CustomCompleteOrder;