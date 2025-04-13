import React from "react";
import { View, Text, StyleSheet, Platform, StyleProp, ViewStyle } from "react-native";
import Constants from "expo-constants";

interface HeaderProps {
  title: string;
  rightComponent?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function Header({ title, rightComponent, containerStyle }: HeaderProps) {
  return (
    <View style={[styles.headerContainer, containerStyle]}>
      <Text style={[styles.title]}>{title}</Text>
      {rightComponent ? <View>{rightComponent}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4AACB3",
    paddingVertical: 8,
    paddingTop: Platform.OS === "ios" ? Constants.statusBarHeight : 5,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 23,
    color: "white"
  }
});
