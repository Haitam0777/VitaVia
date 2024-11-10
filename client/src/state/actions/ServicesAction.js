import axios from 'axios'
import { ADD_SERVICE_FAIL, ADD_SERVICE_REQUEST, ADD_SERVICE_SUCCESS, DELETE_SERVICE_FAIL, DELETE_SERVICE_REQUEST, DELETE_SERVICE_SUCCESS, GET_SERVICES_FAIL, GET_SERVICES_REQUEST, GET_SERVICES_SUCCESS, GET_SERVICE_FAIL, GET_SERVICE_REQUEST, GET_SERVICE_SUCCESS, UPDATE_SERVICE_FAIL, UPDATE_SERVICE_REQUEST, UPDATE_SERVICE_SUCCESS } from '../constants/ServicesConstants';


export const add_service_action = (info,token)=>async dispatch=>{
    dispatch({type:ADD_SERVICE_REQUEST})
    try {
        const {data} = await axios.post("/api/service/",info,{
            headers:{
                token,
                "Content-Type":"multipart/form-data"
            }
        })
        dispatch({type:ADD_SERVICE_SUCCESS,payload:data})
        dispatch(get_services_action());
    } catch (error) {
        dispatch({type:ADD_SERVICE_FAIL,payload:error.response})
    }
}

export const get_services_action = ()=>async dispatch=>{
    dispatch({type:GET_SERVICES_REQUEST});
    try {
        const {data} = await axios.get("/api/service/get-all");
        dispatch({type:GET_SERVICES_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_SERVICES_FAIL,payload:error.response})
    }
}
export const get_service_action = (id)=>async dispatch=>{
    dispatch({type:GET_SERVICE_REQUEST});
    try {
        const {data} = await axios.post("/api/service/get",{id});
        dispatch({type:GET_SERVICE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_SERVICE_FAIL,payload:error.response})
    }
}


export const set_service_action = (info,token)=>async dispatch=>{
    dispatch({type:UPDATE_SERVICE_REQUEST})
    try {
        const {data} = await axios.post("/api/service/update",info,{
            headers:{
                token,
                "Content-Type":"multipart/form-data"
            }
        })
        dispatch({type:UPDATE_SERVICE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:UPDATE_SERVICE_FAIL,payload:error.response})
    }
}

export const delete_service_action = (id)=>async dispatch=>{
    dispatch({type:DELETE_SERVICE_REQUEST})
    try {
        const {data} = await axios.delete("/api/service/"+id);
        dispatch({type:DELETE_SERVICE_SUCCESS,payload:data})
        dispatch(get_services_action());

    } catch (error) {
        dispatch({type:DELETE_SERVICE_FAIL,payload:error.response})
    }
}