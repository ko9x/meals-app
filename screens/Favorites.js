import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-navigation";
import Screen from "../components/UI/Screen";
import { MEALS } from "../data/dummy-data";
import Meal from "../models/meal";
import MealList from "../components/MealList";

export default function Favorites() {
  const dummyArray = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );

  return <MealList meals={dummyArray} />;
}

Favorites.navigationOptions = {
  headerTitle: "Your Favorites",
};

const styles = StyleSheet.create({});
