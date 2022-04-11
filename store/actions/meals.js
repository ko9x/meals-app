export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SAVE_FILTERS = 'SAVE_FILTERS';

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id };
};

export const saveFilters = (filters) => {
    return { type: SAVE_FILTERS, filters: filters}
};
