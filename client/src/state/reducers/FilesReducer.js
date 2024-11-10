//get images of each page reducer

import { GET_FILE_FAIL, GET_FILE_REQUEST, GET_FILE_SUCCESS } from "../constants/FilesConstants";

export const fileReducer = (state={},action)=>{
    switch(action.type){
        case GET_FILE_REQUEST:
            return {loading:true};
        case GET_FILE_SUCCESS:
            return {loading:false,files:action.payload}
        case GET_FILE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}