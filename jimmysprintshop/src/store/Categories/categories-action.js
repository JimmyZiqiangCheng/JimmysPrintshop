import { CATEGORIES_ACTION_TYPES } from "./categories-action-types";
import { getCategoriesData } from "../../service/database/firebase-store";

// action creators
export const fetchCategoriesStart = () => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
  payload: null,
});
export const fetchCategoriesSuccess = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});
export const fetchCategoriesFailed = (error) => ({
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

// redux saga

// export function* fetchCategoriesAsync() {
//   try {
//     const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');
//     yield put(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     yield put(fetchCategoriesFailure(error));
//   }
// }

// take means take actions
// takeLatest means take the latest action if there are a bunch fired
// export function* onFetchCategories() {
//   yield takeLatest(
//     CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
//     fetchCategoriesAsync
//   );
// }

// export function* categoriesSaga() {
//   yield all([call(onFetchCategories)]);
// }
