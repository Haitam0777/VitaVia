import axios from 'axios'
import { ADD_PRODUCT_FAIL, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from '../constants/ProductConstants';


export const add_product_action = (info,token)=>async dispatch=>{
    dispatch({type:ADD_PRODUCT_REQUEST})
    try {
        const {data} = await axios.post("/api/product/",info,{
            headers:{
                token,
                "Content-Type":"multipart/form-data"
            }
        })
        dispatch({type:ADD_PRODUCT_SUCCESS,payload:data})
        dispatch(get_products_action(info.get("service_id")));
    } catch (error) {
        dispatch({type:ADD_PRODUCT_FAIL,payload:error.response})
    }
}

export const get_all_products_action = ()=>async dispatch=>{
    dispatch({type:GET_PRODUCTS_REQUEST});
    try {
        const {data} = await axios.get("/api/product/get-all");
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_PRODUCTS_FAIL,payload:error.response})
    }
}
export const get_products_action = (service_id)=>async dispatch=>{
    dispatch({type:GET_PRODUCT_REQUEST});
    try {
        const {data} = await axios.get("/api/product/get",{
            params:{
                service_id
            }
        });
        dispatch({type:GET_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_PRODUCT_FAIL,payload:error.response})
    }
}


export const set_product_action = (info,token)=>async dispatch=>{
    dispatch({type:UPDATE_PRODUCT_REQUEST})
    try {
        const {data} = await axios.post("/api/product/update",info,{
            headers:{
                token,
                "Content-Type":"multipart/form-data"
            }
        })
        dispatch({type:UPDATE_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:UPDATE_PRODUCT_FAIL,payload:error.response})
    }
}

export const delete_product_action = (id)=>async dispatch=>{
    dispatch({type:DELETE_PRODUCT_REQUEST})
    try {
        const {data} = await axios.delete("/api/product/"+id);
        dispatch({type:DELETE_PRODUCT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:DELETE_PRODUCT_FAIL,payload:error.response})
    }
}