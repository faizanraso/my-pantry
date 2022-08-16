import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import colours from "../shared/colours";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  getAllKeys,
  clearAll,
  removeValue,
  getData,
  storeData,
} from "../shared/AsyncStorageFunctions";

export default function MyPantryScreen() {

  clearAll()
  getAllKeys()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}></ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.primary,
  },
  scrollView: {
    marginHorizontal: "5%",
  },
});
