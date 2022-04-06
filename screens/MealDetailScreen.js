import { useLayoutEffect } from "react";
import { StyleSheet, Image, ScrollView, View, Text } from "react-native";
import Screen from "../components/UI/Screen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/UI/DefaultText";
import { useSelector } from "react-redux";

export default function MealDetailScreen(props) {

  const availableMeals = useSelector(state => state.meals.meals);

  const mealId = props.navigation.getParam("mealId");
  const mealTitle = props.navigation.getParam("mealTitle");

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const listItems = (arr) => {
    return arr.map((item) => (
      <View style={styles.listItem} key={item}>
        <DefaultText>{item}</DefaultText>
      </View>
    ));
  };

  return (
    <ScrollView>
      <View>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <View style={styles.details}>
            <DefaultText>{selectedMeal.duration}m</DefaultText>
            <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>
              {selectedMeal.affordability.toUpperCase()}
            </DefaultText>
          </View>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        <View>{listItems(selectedMeal.ingredients)}</View>
        <Text style={styles.title}>Steps</Text>
        <View>{listItems(selectedMeal.steps)}</View>
      </View>
    </ScrollView>
  );
}

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam('mealTitle')

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("add to favs");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  detailsContainer: {
    alignItems: 'center'
  },
  details: {
    width: "80%",
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});
