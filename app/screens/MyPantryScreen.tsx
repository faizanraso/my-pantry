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
import TabBar from "../shared/TabBar";

export default function MyPantryScreen() {
  const [allItems, setAllItems] = React.useState<readonly string[]>([]);

  React.useEffect(() => {
    getAllKeys().then((tempList: readonly string[]) => setAllItems(tempList));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {allItems.map((itemName, index) => {
          if (itemName != "scannedBarcode") {
            return <Item key={index} item={itemName} />;
          }
        })}
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
