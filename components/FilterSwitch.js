import { View, Text, Switch, Platform, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function FilterSwitch(props) {
  const toggleSwitch = (value) => {
    props.onSwitch(value);
  };

  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primary }}
        thumbColor={Platform.OS === "android" ? Colors.secondary : ""}
        value={props.value}
        onValueChange={(newValue) => props.onSwitch(newValue)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    paddingVertical: 15,
  },
});
