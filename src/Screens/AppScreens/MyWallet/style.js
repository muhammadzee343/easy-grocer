import React from 'react';
import {StyleSheet} from 'react-native';
import {button_backgroun, Dark, text_grey} from '../../../Assets/themes/colors';
import { FONT_ROBOTO } from '../../../Assets/themes/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.1,
  },
  cardContainer: {  
    flex: 0.7,
    width: '100%',
  },
  textheading:{
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'roboto',
    color:Dark,
    marginLeft:10,
  },
  headingContainer_delivery: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
},
headingContainer:{
  flexDirection: 'row',
  alignItems: 'center',
},
addCardContainer:{
  paddingVertical:30,
  marginHorizontal:25,
  flexDirection:'row'
  

},
cardText:{
  fontSize:14,
  color:text_grey,
  paddingLeft:10, 
  paddingRight:10,
},



boxContainer:{
    justifyContent:'center',
    alignItems:'center',
},
priceHeading:{
    fontSize:22,
    paddingBottom:10,
    color:Dark,
    fontFamily:'roboto',
    fontWeight:'bold',
    
},
priceText:{
    fontSize: 16,
    fontWeight: '700',
    fontFamily: FONT_ROBOTO,
    color:Dark,
    paddingTop:10,
},
borderDesignCard:{
    borderColor:button_backgroun,
    borderWidth:1,
}
});

export default styles;
