import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import BackArrowIcon from '../../../Assets/icons/BackArrow';
import CashMoneyIcon from '../../../Assets/icons/CashMoneyIcon';
import HandCashIcon from '../../../Assets/icons/HandCashIcon';
import {
  button_backgroun,
  Dark,
  text_grey,
  white,
} from '../../../Assets/themes/colors';
import CardCheckout from '../../../Components/CardCheckout';
import CustomHeader from '../../../Components/CustomHeader';
import styles from './style';
import SearchIcon from '../../../Assets/icons/SearchIcon';
import SubCategoryCard from '../../../Components/SubCategoryCard';
import cokeimg from '../../../Assets/images/cokes.png';
import CategoryCard from '../../../Components/CategoryCard';
import cakeimg from '../../../Assets/images/cake.png';
import BabyCareIcon from '../../../Assets/icons/BabyCareIcon';

const ctgArray = [
  {id: '1', ctgimguri: <BabyCareIcon iconColor={Dark} />, ctgHeading: 'First'},
  {id: '2', ctgimguri: <BabyCareIcon iconColor={Dark} />, ctgHeading: 'Second'},
  {id: '3', ctgimguri: <BabyCareIcon iconColor={Dark} />, ctgHeading: 'Third'},
];

const subctgArray = [
  {id: '1', imguri: cokeimg, subctgHeading: 'Coke', parentId: '1'},
  {id: '2', imguri: cakeimg, subctgHeading: 'Cake', parentId: '2'},
  {id: '3', imguri: cakeimg, subctgHeading: 'Bake', parentId: '2'},
];

const CategoryScreen = props => {
  const fun = ctgParentId => {
    console.log(ctgParentId);
  };
  const BackPressAction = () => {
    props.navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.headerContainer}> */}
      <CustomHeader
        leftIcon={
          <BackArrowIcon iconColor={Dark} onPress={() => navigation.goBack()} />
        }
        //   headerTitle="Categories"
        onBackPress={BackPressAction}
        bgColor={white}
      />
      {/* </View> */}
      <ScrollView style={styles.cardContainer}>
        <View style={styles.categoriesscreenContainer}>
          <View style={styles.sidebarContainer}>
            {ctgArray.map((ctgData, index) => {
              return (
                <TouchableOpacity
                  key={ctgData.id}
                  onPress={() => fun(ctgData.id)}>
                  <CategoryCard
                    CategoryText={ctgData.ctgHeading}
                    categoryIcon={ctgData.ctgimguri}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.subcategoriesContainer}>
            {subctgArray.map(subctgData => {
              return (
                <SubCategoryCard
                  key={subctgData.id}
                  subCategoryText={subctgData.subctgHeading}
                  subCategoryImguri={subctgData.imguri}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;
