import { getSectores, getUserList } from "../../ApiReq/getAllDataSession";
import { SET_FRONT_DATA, SET_REGISTRO, SET_SECTORES, SET_USUARIOS } from "../../constant";






export function setUsuarios(){
    return async (dispatch)=>{
        const data = await getUserList()
        dispatch({
            type: SET_USUARIOS,
            payload: data
        })
    };
}

export function setSectores(){
    return async (dispatch)=>{
        const data = await getSectores()
        dispatch({
            type: SET_SECTORES,
            payload: data
        })
    };
}

export function setRegistro(payload){
    return {
            type:SET_REGISTRO,
            payload
        }
}

export function setFrontData(payload){
    return {
            type:SET_FRONT_DATA,
            payload
        }
}
