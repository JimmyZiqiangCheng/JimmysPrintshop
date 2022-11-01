import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";
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

const middleWares = [thunk];

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
//saga.run(rootSaga);
export const persistor = persistStore(store);
