import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Screen from "../components/UI/Screen";
import { CATEGORIES, MEALS } from "../data/dummy-data";

export default function CategoryMealsScreen(props) {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  const onSelectMeal = () => {
  };

  const renderMealItem = (itemData) => {
    return (
      <View style={styles.mealItem}>
        <TouchableOpacity onPress={() => {onSelectMeal}}>
        <View style={{...styles.mealRow, ...styles.mealHeader}}>
          <Text>{itemData.item.title}</Text>
        </View>
        <View style={{...styles.mealRow, ...styles.mealDetail}}>
          <Text>{itemData.item.duration}m</Text>
          <Text>{itemData.item.complexity}</Text>
          <Text>{itemData.item.affordability}</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  };

  return (
    <Screen>
      <FlatList style={{width: '100%'}} data={displayedMeals} renderItem={renderMealItem} />
    </Screen>
  );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  // return {
  //   headerTitle: selectedCategory.title,
  // };
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ccc',
  },  
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '90%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  }
});
