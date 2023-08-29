import React, { useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "@gno/styles/colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue,
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonPressed:{
    backgroundColor: colors.darkblue,
  },
});

const Button = ({ title, onPress, loading }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const buttonStyles = [
    styles.button,
    isPressed && styles.buttonPressed,
  ]

  return (
    <Pressable
    onPress={onPress}
    onPressIn={handlePressIn}
    onPressOut={handlePressOut}
    >
      <View style={buttonStyles}>
        {loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <Text style={styles.buttonText}>{title}</Text>
        )}
      </View>
    </Pressable>
  );
};

export default Button;
