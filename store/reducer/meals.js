import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SAVE_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                const updatedFavorites = [...state.favoriteMeals];
                updatedFavorites.splice(existingIndex, 1);
                return {...state, favoriteMeals: updatedFavorites }
            } else {
                const newFavorite = state.meals.find(meal => meal.id === action.mealId);
                return {...state, favoriteMeals: state.favoriteMeals.concat(newFavorite)};
            }
        case SAVE_FILTERS: 
            if (action.filters.glutenFree) {
                const updatedFilteredMeals = state.meals.filter(meal => meal.isGlutenFree)
                console.log('updat', updatedFilteredMeals); //@DEBUG
                return {...state, filteredMeals: updatedFilteredMeals};
            } else {
                console.log('false', ); //@DEBUG
            }
            
        default: 
            return state;
    }
    return state;
};

export default mealsReducer;