import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  ProductsListReducer,
  ProductsDetailsReducer,
} from "../Reducer/ProductsReducer";
import { cartReducer } from "../Reducer/cartReducer";
import {
  userLoginReducer,
  userResisterReducer,
  userDetailsReducer,
  userProfileUpdateReducer,
} from "../Reducer/userReducer";

import { orderCreateReducer } from "../Reducer/orderReducer"

const reducer = combineReducers({
  productsList: ProductsListReducer,
  productDetails: ProductsDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userResister: userResisterReducer,
  userDetails: userDetailsReducer,
  userProfileUpdate: userProfileUpdateReducer,
  orderCreate: orderCreateReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userLoginInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userLoginInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
