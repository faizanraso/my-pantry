import {
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colours from "../shared/colours";
import React, { useState, useEffect } from "react";
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
  const [allItems, setAllItems] = useState<readonly string[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(true);

  useEffect(() => {
    loadUserData();

    //sort items array
    const sorted = [...allItems].sort();
    setAllItems(sorted);
  }, []);

  const loadUserData = React.useCallback(() => {
    setRefreshing(true);
    getAllKeys().then((tempList: readonly string[]) => setAllItems(tempList));
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            progressBackgroundColor={colours.loadingIndicator}
            tintColor={colours.loadingIndicator}
            onRefresh={loadUserData}
          />
        }
      >
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
