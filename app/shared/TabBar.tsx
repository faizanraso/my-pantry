import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colours from "../assets/colours";
import MyPantryScreen from "../screens/MyPantryScreen";
import AddItemsScreen from "../screens/AddItemsScreen";
import { Feather } from "@expo/vector-icons";
import React from "react";

export default function TabBar() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colours.secondary,
        },
        headerStyle: {
          backgroundColor: colours.secondary,
        },
        headerTitleStyle: {
          color: colours.headerFont,
          fontWeight: "bold",
        },
        tabBarActiveBackgroundColor: colours.secondary,
        tabBarInactiveBackgroundColor: colours.secondary,
        tabBarActiveTintColor: colours.activeTab,
        tabBarInactiveTintColor: colours.inactiveTab,
      }}
    >
      <Tab.Screen
        name="My Pantry"
        component={MyPantryScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="shopping-bag"
              color={focused ? colours.activeTab : colours.inactiveTab}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add Items"
        component={AddItemsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="plus-square"
              color={focused ? colours.activeTab : colours.inactiveTab}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
