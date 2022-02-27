import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productListReducer,
  productDetalsReducer,
} from "./reducers/productReucers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetalsReducer,
});
const initialState = {};

const middleWare = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
