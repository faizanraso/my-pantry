import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import colours from "../shared/colours";
import {
  getData,
  removeValue,
  storeData,
} from "../shared/AsyncStorageFunctions";
import Config from "react-native-config";

const axios = require("axios");

export default function ItemEntryScreen({ navigation }: { navigation: any }) {
  const [itemName, setItemName] = useState<any>("");
  const [itemQuantity, setItemQuantity] = useState<any>("");
  const [barcodeLookupSuccess, setbarcodeLookupSuccess] =
    useState<boolean>(true);

  useEffect(() => {
    checkForScannedBarcode();
  }, []);

  useEffect(() => {
    if (!barcodeLookupSuccess) {
      Alert.alert(
        "Looks like we wern't able to find this item. Please try adding it manually."
      );
    }
  }, [barcodeLookupSuccess]);

  function checkForScannedBarcode() {
    getData("scannedBarcode").then((scannedItemBarcode) => {
      if (scannedItemBarcode) {
        searchBarcode(scannedItemBarcode.substring(1));
        removeValue("scannedBarcode");
      }
    });
  }

  function searchBarcode(barcodeToSearch: any) {
    const options = {
      method: "GET",
      url: `https://barcode-monster.p.rapidapi.com/${barcodeToSearch}`,
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": process.env.API_HOST,
      },
    };

    axios
      .request(options)
      .then(function (response: { data: any }) {
        if (response.data.description === undefined) {
          setbarcodeLookupSuccess(false);
        } else {
          setbarcodeLookupSuccess(true);
          setItemName(response.data.description.slice(0, -23));
        }
      })
      .catch(function (error: any) {
        Alert.alert(
          "Looks like we wern't able to find this item. Please try adding it manually."
        );
      });
  }

  function addNewItem() {
    storeData(itemName, itemQuantity);
    navigation.navigate("My Pantry");
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
        style={styles.addItemButton}
        disabled={!itemQuantity || !itemName ? true : false}
        onPress={() => addNewItem()}
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
    fontWeight: "500",
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
    borderWidth: 2,
    padding: 10,
    marginTop: 3,
  },
  addItemButton: {
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
