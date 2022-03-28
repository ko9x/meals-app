import { StyleSheet, View, Text, Button } from "react-native";
import Screen from "../components/UI/Screen";

export default function CategoryMealsScreen(props) {
  return (
    <Screen>
      <Text>The Category Meals Screen!</Text>
      <Button title="To Meal Detail Screen!" onPress={() => {
          props.navigation.navigate('MealDetail')
      }}/>
    </Screen>
  );
}

const styles = StyleSheet.create({});
