import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import colours from "../shared/colours";
import {
  getData,
  removeValue,
  storeData,
} from "../shared/AsyncStorageFunctions";

export default function ItemEntryScreen({ navigation }: { navigation: any }) {
  const [itemName, setItemName] = useState<any>("");
  const [itemQuantity, setItemQuantity] = useState<any>("");

  useEffect(() => {
    checkForScannedBarcode();
  }, []);

  function checkForScannedBarcode() {
    getData("scannedBarcode").then((itemName) => setItemName(itemName));
    removeValue("scannedBarcode");
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemNameContainer}>
        <Text style={styles.labelText}>Item Name:</Text>
        <TextInput
          defaultValue={itemName}
          style={styles.textInput}
          onChangeText={(item) => setItemName(item)}
        />
      </View>
      <View style={styles.itemNameContainer}>
        <Text style={styles.labelText}>Quantity:</Text>
        <TextInput
          defaultValue={itemQuantity}
          style={styles.textInput}
          onChangeText={(quantity) => setItemQuantity(quantity)}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity
        style={styles.optionButtons}
        onPress={() => navigation.navigate("Item Entry")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Add to Pantry {"  "}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.primary,
  },
  labelText: {
    color: colours.text,
  },
  itemNameContainer: {
    marginHorizontal: "3%",
    marginTop: "5%",
  },
  textInput: {
    backgroundColor: colours.secondary,
    borderColor: colours.inputBorder,
    color: colours.text,
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginTop: 3,
  },
  optionButtons: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: colours.secondary,
    borderRadius: 15,
    width: "80%",
    height: "7%",
    marginTop: "10%",
  },
  buttonText: {
    textAlign: "center",
    color: colours.text,
    fontWeight: "500",
    fontSize: 15,
  },
  buttonContent: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
