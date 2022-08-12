import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colours from "../assets/colours";
import MyPantryScreen from "../screens/MyPantryScreen";
import AddItemsScreen from "../screens/AddItemsScreen";
import React from "react";

export default function TabBar() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colours.secondary,
        },
        tabBarActiveBackgroundColor: colours.secondary,
        tabBarInactiveBackgroundColor: colours.secondary,
        tabBarActiveTintColor: colours.activeTab,
        tabBarInactiveTintColor: colours.inactiveTab,
      }}
    >
      <Tab.Screen name="My Pantry" component={MyPantryScreen} />
      <Tab.Screen name="Add Items" component={AddItemsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
