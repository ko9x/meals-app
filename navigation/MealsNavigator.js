import { Platform } from "react-native";
import Colors from "../constants/Colors";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Favorites from "../screens/Favorites";
import FiltersScreen from "../screens/FiltersScreen";
import { Ionicons } from "@expo/vector-icons";

const stackNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "",
    },
    headerTitleStyle: {
      fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
}

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meal Categories",
      },
    },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: stackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: Favorites,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: stackNavOptions
  }
);

const FilterNavigator = createStackNavigator({
  Filter: FiltersScreen
},
{
  defaultNavigationOptions: stackNavOptions
});

const TabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={30}
              color={tabInfo.tintColor}
              style={{paddingTop: 5}}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={30} color={tabInfo.tintColor} style={{paddingTop: 5}} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontFamily: 'open-sans-bold',
        marginBottom: -10
      },
      activeTintColor: Colors.secondary,
    },
  }
);

const MainNavigator = createDrawerNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals'
    }
  },
  Filters: FilterNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.secondary,
    labelStyle: {
      fontFamily: 'open-sans'
    }
  }
});

export default createAppContainer(MainNavigator);
