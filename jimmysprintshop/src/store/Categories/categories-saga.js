// import { takeLatest, all, call, put } from "redux-saga/effects";
// import { getCategoriesData } from "../../service/database/firebase-store";
// import {
//   fetchCategoriesSuccess,
//   fetchCategoriesFailed,
// } from "./categories-action";
// import { CATEGORIES_ACTION_TYPES } from "./categories-action-types";

// export function* fetchCategoriesAsync() {
//   try {
//     // use call to replace function call
//     // 1st para is function, then para for the function
//     const categories = yield call(getCategoriesData, "categories");
//     // use yield put to replace dispatch
//     yield put(fetchCategoriesSuccess(categories));
//   } catch (err) {
//     yield put(fetchCategoriesFailed(err));
//   }
// }

// export function* onFetchCategories() {
//   // receive actions and take the latest one, ignore previous ones
//   yield takeLatest(
//     CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
//     fetchCategoriesAsync
//   );
// }

// export function* categoriesSaga() {
//   // wait until everything inside all completes before continue
//   yield all([onFetchCategories]);
// }
