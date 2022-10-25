import { CATEGORIES_ACTION_TYPES } from "./categories-action-types";
import { getCategoriesData } from "../../service/database/firebase-store";

const fetchCategoriesStart = () => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
  payload: null,
});
const fetchCategoriesSuccess = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});
const fetchCategoriesFailed = (error) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  payload: error,
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
