import React from 'react';

import { StyleSheet, TouchableOpacity, Text } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const CustomButton = ({ onPress, title, size, backgroundColor, style, textStyle }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.appButtonContainer,
        size === "sm" && {
          paddingHorizontal: 8,
          paddingVertical: 6,
          elevation: 6
        },
        style
      ]}
    >
      <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 },textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
    appButtonContainer: {
      alignSelf: "center",
      margin: 10,
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 20,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });

export default CustomButton;