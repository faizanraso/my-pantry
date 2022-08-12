import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import colours from "../assets/colours";
import React from "react";

export default function AddItemsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.optionButtons}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Enter Manually {'  '}</Text>
          <Entypo name="plus" size={17} color={colours.textFont} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButtons}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Scan Barcode {'    '}</Text>
          <MaterialCommunityIcons
            name="barcode-scan"
            size={17}
            color={colours.textFont}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButtons}>
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Search Directory {'    '}</Text>
          <FontAwesome5 name="search" size={17} color={colours.textFont} />
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
    width: "85%",
    height: "10%",
    marginTop: "10%",
  },
  buttonText: {
    textAlign: "center",
    color: colours.textFont,
    fontWeight: "500",
    fontSize: 15,
  },
  buttonContent: {
    flexDirection: "row",
  },
});
