import React, { useState, useEffect } from 'react';
import { Text, Image, View, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import BackArrowIcon from '../../../Assets/icons/BackArrow';
import EyeIcon from '../../../Assets/icons/EyeIcon';
import { button_backgroun, Dark, white } from '../../../Assets/themes/colors';
import CustomHeader from '../../../Components/CustomHeader';
import cokeimg from '../../../Assets/images/cokes.png';

import noOrderImg from '../../../Assets/images/noOrder.png';
import CardCheckout from '../../../Components/CardCheckout';
import styles from './style';

const OrdersArray = [
  { id: 1543, orderImage: cokeimg, orderTitle: 'Coke', orderDate: '12-12-2021', orderStatus: 'Completed' },
  { id: 2525, orderImage: cokeimg, orderTitle: 'Bread', orderDate: '12-12-2021', orderStatus: 'Closed' },
  { id: 3564, orderImage: cokeimg, orderTitle: 'Grocer Special', orderDate: '12-12-2021', orderStatus: 'In Progress' },
  { id: 423453545, orderImage: cokeimg, orderTitle: 'Grocer Special New Package', orderDate: '12-12-2021', orderStatus: 'In Progress' },
]
const MyOrders = props => {
  const [modalVisible, setModalVisible] = useState(false);

  const BackPressAction = () => {
    props.navigation.goBack();
  };

  const orderlistId = (orderId) => {
    setModalVisible(true)
    console.log(orderId)
  }
  return (

    <View style={{ flex: 1 }}>
      <CustomHeader
        leftIcon={<BackArrowIcon iconColor={Dark} />}
        headerTitle={'My Orders'}
        onBackPress={BackPressAction}
        bgColor={white}
      />

      <CardCheckout >
        {OrdersArray?.length ?
          <View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: Dark, fontSize: 20, fontWeight: 'bold', }}>All Orders</Text>
            </View>
            <View style={styles.mainViewLists}>
              <View style={styles.listViewHeaderSection}>

                {/* <View style={{ width: 60, marginRight: 30, }}>
              <Text style={styles.headingCell}>Image</Text>
            </View> */}
                <Text style={styles.headingCell}>Date</Text>
                <View style={{ width: 40, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.headingCell}>Order#</Text>
                </View>
                <Text style={styles.headingCell}>Title</Text>

                <Text style={styles.headingCell}>View</Text>
              </View>

              <View >

                {OrdersArray.map((orderData, i) => {
                  return (


                    <View style={styles.listViewDetailsSection} key={orderData.id}>

                      <Text style={styles.detailsCell}>{orderData.orderDate}</Text>
                      <View style={{ width: 60, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.detailsCell}>{orderData.id}</Text>
                      </View>
                      {/* <Image source={orderData.orderImage} style={styles.orderimageDesign} /> */}

                      <View style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.detailsCell, styles.titledesign}>{orderData.orderTitle}</Text>
                      </View>
                      <TouchableOpacity onPress={() => orderlistId(orderData.id)}>
                        <EyeIcon iconColor={button_backgroun} />
                      </TouchableOpacity>

                    </View>

                  )
                })}



              </View>
            </View>
          </View>
          :
          <View style={styles.noOrderContainer}>
            <Image source={noOrderImg} />
            <Text style={styles.textnoOrderHeading}>No Orders</Text>
            <Text style={styles.textnoOrderPara}>You haven't made any order yet</Text>
          </View>
        }
      </CardCheckout>
      {/* {modalVisible &&
        <View style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'black',
          opacity: 0.8,

          zIndex: 99999
        }}>
        </View>
      } */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      // onRequestClose={() => {
      //   Alert.alert("Modal has been closed.");
      //   setModalVisible(!modalVisible);
      // }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <View >

              {OrdersArray.map((orderData, i) => {
                return (


                  <View style={styles.listViewDetailsSection} key={orderData.id}>

                    <Text style={styles.detailsCell}>{orderData.orderDate}</Text>
                    <View style={{ width: 60, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={styles.detailsCell}>{orderData.id}</Text>
                    </View>
                    {/* <Image source={orderData.orderImage} style={styles.orderimageDesign} /> */}

                    <View style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={styles.detailsCell, styles.titledesign}>{orderData.orderTitle}</Text>
                    </View>
                    <TouchableOpacity onPress={() => orderlistId(orderData.id)}>
                      <EyeIcon iconColor={button_backgroun} />
                    </TouchableOpacity>

                  </View>

                )
              })}



            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>


  )

}
export default MyOrders;