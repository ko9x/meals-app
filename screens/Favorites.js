import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/UI/Screen";
import DefaultText from "../components/UI/DefaultText";

export default function Favorites(props) {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favoriteMeals.length < 1) {
    return (
      <Screen>
        <DefaultText>No favorite meals found. Add some!</DefaultText>
      </Screen>
    );
  }

  return <MealList meals={favoriteMeals} navigation={props.navigation} />;
}

Favorites.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
