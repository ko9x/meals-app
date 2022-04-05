import { StyleSheet, View, Text } from "react-native";
import Screen from "../components/UI/Screen";

export default function FiltersScreen() {
    return (
        <Screen><Text>The Filters Screen!</Text></Screen>
    )
};

FiltersScreen.navigationOptions = {
    headerTitle: 'Filter Meals'
};

const styles = StyleSheet.create({});