import { StatusBar } from "expo-status-bar";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colours from "./app/assets/colours";
import TabBar from "./app/shared/TabBar";
import { StyleSheet, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor={colours.secondary} />
      <TabBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
