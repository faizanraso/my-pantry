import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import colours from "../shared/colours";
import {
  getData,
  removeValue,
  storeData,
} from "../shared/AsyncStorageFunctions";

export default function Item(props: { item: string }) {
  const [quantity, setQuantity] = React.useState<number>(0);
  const [itemName, setItemName] = React.useState<string>();

  React.useEffect(() => {
    getData(props.item).then((tempQuantity) =>
      setQuantity(Number(tempQuantity))
    );
    setItemName(truncateString(props.item, 20));
  }, []);

  function deleteItem() {
    removeValue(props.item);
  }

  function increaseQuantity() {
    var tempCount = quantity + 1;
    storeData(props.item, tempCount);
    setQuantity(tempCount);
  }
  function decreaseQuantity() {
    var tempCount = quantity - 1;
    storeData(props.item, tempCount);
    setQuantity(tempCount);
  }

  function truncateString(str: string, num: number) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  function displayFullItemName() {
    Alert.alert(props.item);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={displayFullItemName}>
        <View style={styles.leftSideView}>
          <Text style={styles.text}>{itemName}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.rightSideView}>
        <TouchableOpacity onPress={deleteItem} style={styles.deleteButton}>
          <MaterialIcons name="delete" size={18} color={colours.deleteButton} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={decreaseQuantity}
          disabled={true ? quantity <= 0 : false}
        >
          <AntDesign
            name="minuscircle"
            size={18}
            color={colours.enabledQuantityButton}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{"   " + quantity + "   "}</Text>
        <TouchableOpacity onPress={increaseQuantity}>
          <AntDesign
            name="pluscircle"
            size={18}
            color={colours.enabledQuantityButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.secondary,
    borderRadius: 15,
    marginTop: "5%",
    paddingVertical: "7%",
    paddingHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftSideView: {},
  rightSideView: {
    flexDirection: "row",
  },
  text: {
    color: colours.text,
  },
  deleteButton: {
    marginRight: 15,
  },
});
