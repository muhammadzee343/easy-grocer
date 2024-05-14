import React from 'react';
import {StyleSheet} from 'react-native';
import {Dark, text_grey, white} from '../../../Assets/themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 0.1,
    backgroundColor: 'red',
  },
  cardContainer: {
    flex: 0.7,
    width: '100%',
    marginTop: 5,
    // borderTopColor: Dark,
    // borderTopWidth: 0.5,
  },
  categoriesscreenContainer: {
    flexDirection: 'row',
  },
  sidebarContainer: {
    backgroundColor: white,
    width: 80,
    height: 600,
    marginRight: 10,
    elevation: 5,
    shadowColor: Dark,
  },
  subcategoriesContainer: {
    flexDirection: 'row',
    flex: 1,
    // alignItems: 'flex-start',
    // justifyContent: 'space-between',
    paddingTop: 5,
    flexWrap: 'wrap',
  },
});

export default styles;
