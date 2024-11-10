import axios from 'axios'
import { UPDATE_DATA_FAIL, UPDATE_DATA_REQUEST, UPDATE_DATA_SUCCESS } from '../constants/AdminConstants';
import { GET_FILE_FAIL, GET_FILE_REQUEST, GET_FILE_SUCCESS } from '../constants/FilesConstants'

export const get_file_action = (table,page)=>async dispatch=>{
    dispatch({type:GET_FILE_REQUEST});
    try {
        const {data} = await axios.post("/get-files",{table,page});
        dispatch({type:GET_FILE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_FILE_FAIL,payload:error.response})
    }
}

export const set_files_action = (info,token)=>async dispatch=>{
    dispatch({type:UPDATE_DATA_REQUEST})
    try {
        const {data} = await axios.post("/set-files",info,{
            headers:{
                token,
                "Content-Type":"multipart/form-data"
            }
        })
        dispatch({type:UPDATE_DATA_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:UPDATE_DATA_FAIL,payload:error.response})
    }
}