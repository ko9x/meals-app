import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

export default function Favorites(props) {
  const dummyArray = MEALS.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );

  return <MealList meals={dummyArray} navigation={props.navigation} />;
}

Favorites.navigationOptions = {
  headerTitle: "Your Favorites",
};
