import * as actionTypes from "../actions/actionTypes"
import initialstate from "./initialstate";
//* hepsini alıyor

//tutucu 
export default function changeCategoryReducer(state=initialstate.categories, action){
    switch (action.type){
        case actionTypes.GET_CATEGORIES_SUCCES :
            return action.payload            
        default:
            return state;
    }
}