import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import colours from "../assets/colours";
import React from "react";

export default function AddItemsScreen() {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.primary,
  },
});
