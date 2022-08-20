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
import { getData, storeData } from "../shared/AsyncStorageFunctions";

export default function Item(props: { item: string }) {
  const [quantity, setQuantity] = React.useState(0);

  React.useEffect(() => {
    getData(props.item).then((tempQuantity) => setQuantity(tempQuantity));
  }, []);

  function increaseQuantity() {
    var tempCount = quantity + 1;
    storeData(props.item, tempCount);
    setQuantity(tempCount);
  }

  function decreaseQuantity() {
    var tempCount = quantity - 1;
    storeData(props.item, tempCount);
    setQuantity(tempCount);
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftSideView}>
        <Text style={styles.text}>{props.item}</Text>
      </View>
      <View style={styles.rightSideView}>
        <TouchableOpacity
          onPress={decreaseQuantity}
          disabled={true ? quantity == 0 : false}
        >
          <AntDesign
            name="minuscircle"
            size={18}
            color={colours.enabledQuantityButton}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{"  " + quantity + "  "}</Text>
        <TouchableOpacity onPress={increaseQuantity}>
          <AntDesign
            name="pluscircle"
            size={18}
            color={colours.enabledQuantityButton}
          />
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
