import { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import Screen from "../components/UI/Screen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import FilterSwitch from "../components/FilterSwitch";
import Colors from "../constants/Colors";

export default function FiltersScreen(props) {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };

    console.log('appliedFilters', appliedFilters); //@DEBUG
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    props.navigation.setParams({save: saveFilters});
  },[saveFilters]);

  return (
    <Screen style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch label={'Gluten-free'} value={isGlutenFree} onSwitch={setIsGlutenFree}/>
      <FilterSwitch label={'Lactose-free'} value={isLactoseFree} onSwitch={setIsLactoseFree}/>
      <FilterSwitch label={'Vegan'} value={isVegan} onSwitch={setIsVegan}/>
      <FilterSwitch label={'Vegetarian'} value={isVegetarian} onSwitch={setIsVegetarian}/>
    </Screen>
  );
}

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={
            navData.navigation.getParam('save')
          }
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "flex-start",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});
