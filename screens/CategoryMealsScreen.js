import { StyleSheet, View, Text, Button } from "react-native";
import Screen from "../components/UI/Screen";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoryMealsScreen(props,) {
  const catId = props.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return (
    <Screen>
      <Text>The Category Meals Screen!</Text>
      <Button title="To Meal Detail Screen!" onPress={() => {
          props.navigation.navigate('MealDetail')
      }}/>
    </Screen>
  );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({});
