import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colours from "./colours";
import MyPantryScreen from "../screens/MyPantryScreen";
import AddItemsScreen from "../screens/AddItemsScreen";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

export default function TabBar() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colours.secondary,
          borderTopWidth: 0,
        },

        headerStyle: {
          backgroundColor: colours.secondary,
          borderBottomColor: colours.navigationBorder,
          borderWidth: 0,
          borderColor: colours.navigationBorder,
        },
        headerTitleStyle: {
          color: colours.header,
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
              size={size}
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
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
