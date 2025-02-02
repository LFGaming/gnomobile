import React from "react";
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
});

const Button = ({ title, onPress, loading }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.button}>
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
