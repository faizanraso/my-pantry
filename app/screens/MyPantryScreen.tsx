import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import colours from "../assets/colours";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function MyPantryScreen() {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.primary,
  },
});
