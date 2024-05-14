import React from 'react';
import { StyleSheet } from 'react-native';
import { Dark, text_grey } from '../../../Assets/themes/colors';

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
  boxheading: {
    fontFamily: 'roboto',
    fontSize: 20,
    color: Dark,
    paddingVertical: 5,
    fontWeight: '900',
  },
  contactDetails: {
    fontSize: 18,
    color: text_grey,
    fontFamily: 'karla',
    paddingBottom: 10,
  },
  contactDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
},
statusHeading: {
    fontSize: 18,
    fontFamily: 'roboto',
    fontWeight: '400',
    color:Dark,
},
statusDetails: {
    fontSize: 18,
    fontFamily: 'roboto',
    fontWeight: 'bold',
    color:Dark,
},
btnContainer:{
  alignItems:'flex-end',
  paddingTop:20,

}
});

export default styles;
