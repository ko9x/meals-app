import { StyleSheet, View, Text } from "react-native";
import Screen from "../components/UI/Screen";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

export default function MealDetailScreen(props) {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <Screen>
      <Text>The Meal Detail Screen!</Text>
      <Text>{selectedMeal.title}</Text>
    </Screen>
  );
}

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("add to favs");
          }}
        />
      </HeaderButtons>
    ,
  };
};

const styles = StyleSheet.create({});
