import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPantryScreen from "../screens/MyPantryScreen";
import AddItemsScreen from "../screens/AddItemsScreen";
import BarcodeScanScreen from "../screens/BarcodeScanScreen";
import TabBar from "./TabBar";
import colours from "./colours";

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colours.secondary,
        },
      }}
    >
      <Stack.Screen
        name="TabBar"
        component={TabBar}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Barcode Scanner" component={BarcodeScanScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
