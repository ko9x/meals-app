import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

export default function CategoryMealsScreen(props) {

  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList meals={displayedMeals} navigation={props.navigation} />;
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};
