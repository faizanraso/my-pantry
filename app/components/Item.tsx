import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Touchable,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import colours from "../shared/colours";

export default function Item(props: {
  item: string | null | undefined;
  quantity: number | null | undefined;
  increaseFunction: ((event: GestureResponderEvent) => void) | undefined;
  decreaseFunction: ((event: GestureResponderEvent) => void) | undefined;
}) {


  const [count, setCount] = React.useState(0)

  return (
    <View style={styles.container}>
      <View style={styles.leftSideView}>
        <Text style={styles.text}>{props.item}</Text>
      </View>
      <View style={styles.rightSideView}>
        <TouchableOpacity onPress={props.decreaseFunction}>
          <AntDesign name="minuscircle" size={18} color={colours.text} />
        </TouchableOpacity>
        <Text style={styles.text}>{"  " + props.quantity + "  "}</Text>
        <TouchableOpacity onPress={props.increaseFunction}>
          <AntDesign name="pluscircle" size={18} color={colours.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.secondary,
    borderRadius: 15,
    marginTop: "5%",
    paddingVertical: "7%",
    paddingHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftSideView: {},
  rightSideView: {
    flexDirection: "row",
  },
  text: {
    color: colours.text,
  },
});
