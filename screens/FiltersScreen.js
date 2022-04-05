import { StyleSheet, View, Text } from "react-native";
import Screen from "../components/UI/Screen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

export default function FiltersScreen() {
  return (
    <Screen>
      <Text>The Filters Screen!</Text>
    </Screen>
  );
}

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
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
  };
};

const styles = StyleSheet.create({});
