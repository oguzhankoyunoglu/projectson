//depo , aksiyonları ve reducerları tutuyoruz store da 
//stor u oluşturacak fonk buraya yazılırmış

import {applyMiddleware, createStore} from "redux"   //function
import rootReducer from "./index"
import thunk from "redux-thunk"

export default function configureStore(){
    return createStore(rootReducer,applyMiddleware(thunk))
}

