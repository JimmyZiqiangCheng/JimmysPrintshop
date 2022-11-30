import { createSlice, createAction } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { getCategoriesData } from "../service/database/firebase-store";

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    fetchCategoriesStart: (state) => {
      state.isLoading = true;
    },
    fetchCategoriesSuccess: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    fetchCategoriesFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const fetchCategoriesAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categories = await getCategoriesData("categories");
      dispatch(fetchCategoriesSuccess(categories));
    } catch (err) {
      dispatch(fetchCategoriesFailed(err));
    }
  };
};

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} = categoriesSlice.actions;
export default categoriesSlice.reducer;

const selectCategoriesReducer = (state) => state.categories;
const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
