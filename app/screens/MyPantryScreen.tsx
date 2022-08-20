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
  // create an array containing a list of all item names (useState)
  // create an array for all qunatities (useState)
  // keep pushing updates to the asyncstorage

  const [allItems, setAllItems] = React.useState()
  
  React.useEffect(()=>{
    // getAllKeys().then((tempList) => setAllItems(tempList))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Item item={"Test 1"} />
        <Item item={"Test 2"} />
        <Item item={"Test 3"} />
        <Item item={"Test 4"} />
        <Item item={"not a test"} />
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
