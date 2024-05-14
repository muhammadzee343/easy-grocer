import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RegistrationScreen from '../Screens/AuthScreens/RegistrationScreen';
import LoginScreen from '../Screens/AuthScreens/LoginScreen';
import HomeScreen from '../Screens/AppScreens/Home';
import PromotionScreen from '../Screens/AppScreens/Promotion';
import Account from '../Screens/AppScreens/Account';
import MapsScreen from '../Screens/AppScreens/Maps';
import HomeTabIcon from '../Assets/icons/HomeTabIcon';
import CategoryTabIcon from '../Assets/icons/CategoryTabIcon';
import PromotionTabIcon from '../Assets/icons/PromotionTabIcons';
import ProfileIcon from '../Assets/icons/ProfileIcon';
import {
  button_backgroun,
  Dark,
  primary_brand,
  white,
} from '../Assets/themes/colors';
import FeatureProduct from '../Screens/AppScreens/FeatureProduct';
import ProductDetail from '../Screens/AppScreens/ProductDetail';
import placeOrder from '../Screens/AppScreens/PlaceOrder/Index';
import CompleteOrder from '../Screens/AppScreens/CompleteOrder/Index';
import TrackOrder from '../Screens/AppScreens/TrackOrder/Index';
import MyWallet from '../Screens/AppScreens/MyWallet/Index';
import CategoryScreen from '../Screens/AppScreens/CategoryScreen/Index';
import bucketImage from '../Assets/images/cartlogob.png';
import ProfileScreen from '../Screens/AppScreens/Profile';
import MyOrders from '../Screens/AppScreens/Orders/Index';
import AddToCart from '../Screens/AppScreens/AddToCart/index';
import Payment from '../Screens/AppScreens/Payment/index';
import SplashScreen from '../Screens/AppScreens/Splash';
import BucketCart from '../Assets/icons/BucketCart';
import TabShape from '../Assets/icons/TabShape';
import TabBarButton from '../Components/TabBarButton';
import BackArrowIcon from '../Assets/icons/BackArrow';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const HEIGHT_SIZE = 60;

function TabIcon(props) {
  let customIcon;
  switch (props.routename) {
    case 'home':
      customIcon = <HomeTabIcon iconColor={props.colorName} />;
      break;
    case 'Category':
      customIcon = (
        <CategoryTabIcon iconColor={props.colorName} wid={24} hei={20} />
      );
      break;
    case 'promotion':
      customIcon = <PromotionTabIcon iconColor={props.colorName} />;
      break;
    case 'account':
      customIcon = <ProfileIcon iconColor={props.colorName} />;
      break;
    default:
      customIcon = <HomeTabIcon iconColor={props.colorName} />;
  }
  return customIcon;
}

function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={styles.container}>
      <TabShape />
      <View style={StyleSheet.absoluteFill}>
        <View style={styles.content}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;
            const routename = route.name !== undefined ? route.name : 'home';
            const colorName = isFocused ? button_backgroun : Dark;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.button}>
                {options.tabBarButton ? (
                  <TabBarButton />
                ) : (
                  <TabIcon routename={routename} colorName={colorName} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <HomeTabIcon iconColor={focused ? button_backgroun : 'gray'} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <HomeTabIcon iconColor={focused ? button_backgroun : 'gray'} />
          ),
        }}
      />
      <Tab.Screen
        name="AddCart"
        component={AddToCart}
        options={{
          tabBarButton: () => <TabBarButton />,
          tabBarVisible: false,
          // tabBarIcon: ({focused, color}) => (
          //   <HomeTabIcon iconColor={focused ? button_backgroun : 'gray'} />
          // ),
        }}
      />
      <Tab.Screen
        name="promotion"
        component={PromotionScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <HomeTabIcon iconColor={focused ? button_backgroun : 'gray'} />
          ),
        }}
      />
      <Tab.Screen
        name="account"
        component={Account}
        options={{
          tabBarIcon: ({focused, color}) => (
            <HomeTabIcon iconColor={focused ? button_backgroun : 'gray'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="maps" component={MapsScreen} />
        <Stack.Screen name="tab" component={TabNavigation} />
        <Stack.Screen name="placeOrder" component={placeOrder} />
        <Stack.Screen name="addToCart" component={AddToCart} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="productDetail" component={ProductDetail} />
        <Stack.Screen name="Signup" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="featureProduct" component={FeatureProduct} />
        <Stack.Screen name="complete" component={CompleteOrder} />
        <Stack.Screen name="trackOrder" component={TrackOrder} />
        <Stack.Screen name="MyOrders" component={MyOrders} />
        <Stack.Screen name="MyWallet" component={MyWallet} />
        <Stack.Screen name="Categories" component={CategoryScreen} />
        <Stack.Screen name="payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cartDesign: {
    marginBottom: 30,
  },
  container: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    elevation: 8,
    height: HEIGHT_SIZE,
    justifyContent: 'center',
    bottom: -5,

    // backgroundColor: 'red',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    color: button_backgroun,
    fontWeight: 'bold',
  },
  inactiveLabel: {
    color: 'gray',
    fontWeight: 'bold',
  },
});

export default NavigationScreen;
