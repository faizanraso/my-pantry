import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import colours from "../shared/colours";
import React from "react";
import Item from "../components/Item";
import { StatusBar } from "expo-status-bar";
import {
  getAllKeys,
  clearAll,
  removeValue,
  getData,
  storeData,
} from "../shared/AsyncStorageFunctions";

export default function MyPantryScreen() {
  function increaseQuantity(e: any) {
    console.log(e);
  }

  function decreaseQuantity(e: any) {
    console.log(e);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Item
          item={"Test"}
          quantity={4}
          increaseFunction={increaseQuantity}
          decreaseFunction={decreaseQuantity}
        />
        <Item
          item={"Test"}
          quantity={4}
          increaseFunction={increaseQuantity}
          decreaseFunction={decreaseQuantity}
        />
      </ScrollView>
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
