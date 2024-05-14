import React from 'react';
import {StyleSheet} from 'react-native';
import {
  button_backgroun,
  Dark,
  primary_brand_dark,
  white,
} from '../../../Assets/themes/colors';
import {FONT_ROBOTO} from '../../../Assets/themes/fonts';
const styles = StyleSheet.create({
  // container: {
  //     flex: 1,
  //     backgroundColor: white,
  //     borderRadius: 10,
  //     margin: 10,
  // },
  headerTableDesign: {
    backgroundColor: button_backgroun,
    color: white,
  },
  mainViewLists: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  listViewHeaderSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Dark,
  },
  headingCell: {
    color: Dark,
    fontWeight: 'bold',
    fontFamily: FONT_ROBOTO,
    fontSize: 12,
  },
  listViewDetailsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Dark,
  },
  detailsCell: {
    color: Dark,
    fontFamily: FONT_ROBOTO,
    fontSize: 12,
  },
  titledesign: {
    textAlign: 'center',
    color: Dark,
    fontSize: 12,
  },
  // orderimageDesign:{
  //    width:50,
  //    height:50,
  // }

  noOrderContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textnoOrderHeading: {
    color: Dark,
    fontSize: 20,
    fontFamily: FONT_ROBOTO,
    paddingTop: 10,
    fontWeight: '700',
  },
  textnoOrderPara: {
    color: Dark,
    fontSize: 18,
    fontFamily: FONT_ROBOTO,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: '600',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: Dark,
    marginBottom: 15,
    textAlign: 'center',
  },
  textStyle: {
    color: Dark,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default styles;
