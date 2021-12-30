import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ProductsListReducer, ProductsDetailsReducer } from '../Reducer/ProductsReducer'

const reducer = combineReducers({
    productsList: ProductsListReducer,
    productDetails: ProductsDetailsReducer,
})
const initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)))

export default store