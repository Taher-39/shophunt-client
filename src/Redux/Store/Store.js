import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  ProductsListReducer,
  ProductsDetailsReducer,
  ProductsDeleteReducer,
  ProductCreateReducer,
  productUpdateReducer,
} from "../Reducer/ProductsReducer";
import { cartReducer } from "../Reducer/cartReducer";
import {
  userLoginReducer,
  userResisterReducer,
  userDetailsReducer,
  userProfileUpdateReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "../Reducer/userReducer";

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderDeliverReducer,
  orderListMyReducer,
  totalOrderReducer
} from "../Reducer/orderReducer";

const reducer = combineReducers({
  productsList: ProductsListReducer,
  productDetails: ProductsDetailsReducer,
  productDelete: ProductsDeleteReducer,
  productCreate: ProductCreateReducer,
  productUpdate: productUpdateReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userResister: userResisterReducer,
  userDetails: userDetailsReducer,
  userProfileUpdate: userProfileUpdateReducer,
  userList: userListReducer,
  userUpdate: userUpdateReducer,
  userDelete: userDeleteReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMy: orderListMyReducer,
  totalOrder: totalOrderReducer,
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
