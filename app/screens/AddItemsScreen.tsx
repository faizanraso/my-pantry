import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import colours from "../shared/colours";
import React from "react";

export default function AddItemsScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.optionButtons}
        onPress={() => navigation.navigate("Item Entry")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Enter Manually {"  "}</Text>
          <Entypo name="plus" size={17} color={colours.text} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionButtons}
        onPress={() => navigation.navigate("Barcode Scanner")}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Scan Barcode {"    "}</Text>
          <MaterialCommunityIcons
            name="barcode-scan"
            size={17}
            color={colours.text}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.primary,
    alignItems: "center",
  },
  optionButtons: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.secondary,
    borderRadius: 15,
    width: "90%",
    height: "15%",
    marginTop: "8%",
  },
  buttonText: {
    textAlign: "center",
    color: colours.text,
    fontWeight: "500",
    fontSize: 15,
  },
  buttonContent: {
    flexDirection: "row",
  },
});
