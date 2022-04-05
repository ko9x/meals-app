import { View, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import Screen from "./UI/Screen";

export default function MealList(props) {

    const renderMealItem = (itemData) => {
        return (
          <View style={styles.mealItem}>
            <TouchableOpacity onPress={() => {props.navigation.navigate({routeName: 'MealDetail', params: {mealId: itemData.item.id}})}}>
            <View style={{...styles.mealRow, ...styles.mealHeader}}>
              <ImageBackground source={{uri: itemData.item.imageUrl}} style={styles.BGImage}>
              <Text style={styles.title} numberOfLines={1}>{itemData.item.title}</Text>
              </ImageBackground>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
              <Text>{itemData.item.duration}m</Text>
              <Text>{itemData.item.complexity.toUpperCase()}</Text>
              <Text>{itemData.item.affordability.toUpperCase()}</Text>
            </View>
          </TouchableOpacity>
          </View>
        );
      };
    
      return (
        <Screen>
          <FlatList style={{width: '100%'}} data={props.meals} renderItem={renderMealItem} />
        </Screen>
      );

};

const styles = StyleSheet.create({
    mealItem: {
      height: 200,
      width: '100%',
      backgroundColor: '#f5f5f5',
      borderRadius: 10,
      overflow: 'hidden',
      marginVertical: 10,
    },
    BGImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    title: {
      fontFamily: 'open-sans-bold',
      fontSize: 22,
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0.5)',
      paddingVertical: 5,
      paddingHorizontal: 12,
      textAlign: 'center',
      width: '100%'
    },
    mealRow: {
      flexDirection: 'row',
    },
    mealHeader: {
      height: '85%',
    },
    mealDetail: {
      paddingHorizontal: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '15%'
    }
  });
