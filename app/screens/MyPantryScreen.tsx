import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import colours from "../shared/colours";
import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import { getAllKeys, removeValue } from "../shared/AsyncStorageFunctions";

export default function MyPantryScreen() {
  const [allItems, setAllItems] = useState<readonly string[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(true);

  useEffect(() => {
    loadUserData();
  }, [allItems]);

  const loadUserData = React.useCallback(() => {
    setRefreshing(true);
    getAllKeys().then((tempList: readonly string[]) => {
      tempList = [...tempList].sort();
      setAllItems(tempList);
    });
    setRefreshing(false);
  }, []);

  function deleteItem(itemName: string) {
    removeValue(itemName);
  }

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
        {allItems.map((item, index) => {
          return <Item key={item} item={item} />;
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
