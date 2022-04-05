import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-navigation";
import Screen from "../components/UI/Screen";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";

export default function Favorites() {
  const dummyArray = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );

  const renderMeals = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  return (
    <Screen>
      <FlatList data={dummyArray} renderItem={renderMeals} style={{width: '100%'}} />
    </Screen>
  );
}

Favorites.navigationOptions = {
  headerTitle: "Your Favorites",
};

const styles = StyleSheet.create({});
