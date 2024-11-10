import { ADD_SERVICE_FAIL, ADD_SERVICE_REQUEST, ADD_SERVICE_SUCCESS, DELETE_SERVICE_FAIL, DELETE_SERVICE_REQUEST, DELETE_SERVICE_SUCCESS, GET_SERVICES_FAIL, GET_SERVICES_REQUEST, GET_SERVICES_SUCCESS, GET_SERVICE_FAIL, GET_SERVICE_REQUEST, GET_SERVICE_SUCCESS, UPDATE_SERVICE_FAIL, UPDATE_SERVICE_REQUEST, UPDATE_SERVICE_SUCCESS } from "../constants/ServicesConstants";



export const addServiceReducer = (state={},action)=>{
    switch(action.type){
        case ADD_SERVICE_REQUEST:
            return {loading:true};
        case ADD_SERVICE_SUCCESS:
            return {loading:false,data:action.payload}
        case ADD_SERVICE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const getServicesReducer = (state={},action)=>{
    switch(action.type){
        case GET_SERVICES_REQUEST:
            return {loading:true};
        case GET_SERVICES_SUCCESS:
            return {loading:false,data:action.payload}
        case GET_SERVICES_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const getServiceReducer = (state={},action)=>{
    switch(action.type){
        case GET_SERVICE_REQUEST:
            return {loading:true};
        case GET_SERVICE_SUCCESS:
            return {loading:false,data:action.payload}
        case GET_SERVICE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const updateServiceReducer = (state={},action)=>{
    switch(action.type){
        case UPDATE_SERVICE_REQUEST:
            return {loading:true};
        case UPDATE_SERVICE_SUCCESS:
            return {loading:false,data:action.payload}
        case UPDATE_SERVICE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const deleteServiceReducer = (state={},action)=>{
    switch(action.type){
        case DELETE_SERVICE_REQUEST:
            return {loading:true};
        case DELETE_SERVICE_SUCCESS:
            return {loading:false,data:action.payload}
        case DELETE_SERVICE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}