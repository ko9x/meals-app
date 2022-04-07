import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";

export default function Favorites(props) {

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

  return <MealList meals={favoriteMeals} navigation={props.navigation} />;
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
