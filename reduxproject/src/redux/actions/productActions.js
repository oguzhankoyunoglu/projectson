import * as actionTypes from "../actions/actionTypes"




export function getProductsSuccess(products){
    return{type:actionTypes.GET_PRODUCTS_SUCCESS , payload: products}  
}


export function getProducts(){   //categoryId  js özelliği parametreye gerek yok
    return function(dispatch){
        let url ="http://localhost:3000/products";
        return fetch(url).then(response=> response.json())   
        .then(result => dispatch(getProductsSuccess(result)));
    };
}

//if let ten sonra fetch içinde gelen id url = url+ "?..."