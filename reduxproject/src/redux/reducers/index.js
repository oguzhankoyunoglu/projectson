import {combineReducers} from 'redux'
import changeCategoryReducer from './changeCategoryReducer'
import categoryListReducer from "./categoryListReducer"
import productListReducer from "./ProductListReducer"
//fonksiyon combinereducers
//index te bütün store ları bir araya getirmemiz gerek
const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer
}) 

export default rootReducer;