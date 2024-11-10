import { ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, UPDATE_DATA_FAIL, UPDATE_DATA_REQUEST, UPDATE_DATA_SUCCESS } from "../constants/AdminConstants";

export const adminReducer = (state={},action)=>{
    switch(action.type){
        case ADMIN_LOGIN_REQUEST:
            return {loading:true};
        case ADMIN_LOGIN_SUCCESS:
            return {loading:false,data:action.payload}
        case ADMIN_LOGIN_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const uploadFileReducer = (state={},action)=>{
    switch(action.type){
        case UPDATE_DATA_REQUEST:
            return{loading:true};
        case UPDATE_DATA_SUCCESS:
            return {loading:false,data:action.payload}
        case UPDATE_DATA_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}