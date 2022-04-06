import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";

export default function Favorites(props) {

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
  const dummyArray = favoriteMeals.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );

  return <MealList meals={dummyArray} navigation={props.navigation} />;
}

Favorites.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
  }
};
