import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

export default function Favorites(props) {
  const dummyArray = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );

  return <MealList meals={dummyArray} navigation={props.navigation} />;
}

Favorites.navigationOptions = {
  headerTitle: "Your Favorites",
  headerLeft: () =>
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            console.log("show menu");
          }}
        />
      </HeaderButtons>
};
