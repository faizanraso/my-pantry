import { StatusBar } from "expo-status-bar";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import colours from "./app/shared/colours";
import TabBar from "./app/shared/TabBar";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor={colours.secondary} />
      <TabBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
