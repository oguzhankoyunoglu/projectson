import * as actionTypes from "../actions/actionTypes"


//category bastıgında calısacak yer 
export function changeCategory(category){
    return {type:actionTypes.CHANGE_CATEGORY, payload: category}
    //category alıyor 
}

export function getCategoriesSuccess(categories){
    return{type:actionTypes.GET_CATEGORIES_SUCCES , payload: categories}   //yeni reducer categori olacak 
}


//asenkron operasyonlarda redux ın yan etkilerini engellemek için thunk 
export function getCategories(){
    return function(dispatch){
        let url ="http://localhost:3000/categories"
        return fetch(url).then(response=> response.json())  //json çevirelim 
        .then(result => dispatch(getCategoriesSuccess(result)));
    }
    

}