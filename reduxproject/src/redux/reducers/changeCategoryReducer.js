import * as actionTypes from "../actions/actionTypes"
import initialstate from "./initialstate";
//* hepsini alıyor

//tutucu 
export default function changeCategoryReducer(state=initialstate.currentCategory, action){
    switch (action.type){
        case actionTypes.CHANGE_CATEGORY :
            return action.payload            
        default:
            return state;
    }
}