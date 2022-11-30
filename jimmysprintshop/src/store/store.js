import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
//import { rootSaga } from "./root-saga";
//import createSagaMiddleware from "redux-saga";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
//const saga = createSagaMiddleware();

// const middleWares = [
//   process.env.NODE_ENV !== "production" && logger,
// ].filter(Boolean);

// how thunk works essentially
// const thunk = (store) => (action) => (dispatch) => {
//   if (typeof action === "function") {
//     action(dispatch);
//   }
// };

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devtools: process.env.NODE_ENV !== "production",
});
//saga.run(rootSaga);
export const persistor = persistStore(store);
