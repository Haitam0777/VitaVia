import { ADD_PRODUCT_FAIL, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "../constants/ProductConstants";



export const addProductReducer = (state={},action)=>{
    switch(action.type){
        case ADD_PRODUCT_REQUEST:
            return {loading:true};
        case ADD_PRODUCT_SUCCESS:
            return {loading:false,data:action.payload}
        case ADD_PRODUCT_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const getProductsReducer = (state={},action)=>{
    switch(action.type){
        case GET_PRODUCTS_REQUEST:
            return {loading:true};
        case GET_PRODUCTS_SUCCESS:
            return {loading:false,data:action.payload}
        case GET_PRODUCTS_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const getProductReducer = (state={},action)=>{
    switch(action.type){
        case GET_PRODUCT_REQUEST:
            return {loading:true};
        case GET_PRODUCT_SUCCESS:
            return {loading:false,data:action.payload}
        case GET_PRODUCT_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const updateProductReducer = (state={},action)=>{
    switch(action.type){
        case UPDATE_PRODUCT_REQUEST:
            return {loading:true};
        case UPDATE_PRODUCT_SUCCESS:
            return {loading:false,data:action.payload}
        case UPDATE_PRODUCT_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const deleteProductReducer = (state={},action)=>{
    switch(action.type){
        case DELETE_PRODUCT_REQUEST:
            return {loading:true};
        case DELETE_PRODUCT_SUCCESS:
            return {loading:false,data:action.payload}
        case DELETE_PRODUCT_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}