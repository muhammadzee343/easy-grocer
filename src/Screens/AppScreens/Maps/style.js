import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
      },
      btnContainer: {
        position: 'absolute', bottom: 20, width: '100%', justifyContent: 'center', alignItems: 'center'
      }
})

export default styles