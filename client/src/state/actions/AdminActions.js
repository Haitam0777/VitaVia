import axios from "axios"
import { ADMIN_LOGIN_FAIL, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS } from "../constants/AdminConstants"


export const admin_login = (info)=>async dispatch=>{
    dispatch({type:ADMIN_LOGIN_REQUEST})
    try {
        const {data} = await axios.post("/api/login",{info});
        dispatch({type:ADMIN_LOGIN_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:ADMIN_LOGIN_FAIL,payload:error.response})
    }
}