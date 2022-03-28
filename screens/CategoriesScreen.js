import { StyleSheet, View, Text, Button } from "react-native";
import Screen from "../components/UI/Screen";

export default function CategoriesScreen(props) {
  return (
    <Screen>
      <Text>The Categories Screen!</Text>
      <Button title="Go to Meals!" onPress={() => {
          props.navigation.navigate({routeName: 'CategoryMeals'});
      }}/>
    </Screen>
  );
}

const styles = StyleSheet.create({});
