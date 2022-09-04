import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import colours from "./app/shared/colours";
import TabBar from "./app/shared/TabBar";
import { StyleSheet } from "react-native";
import StackNavigator from "./app/shared/StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor={colours.secondary} />
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
