
import axios from "axios"

export const createRegistro = async(data)=>{
    try{
        const response = await axios.post(`${process.env.REACT_APP_REGISTRO}/newRegistro`, data)
        return response.data?.data ? response.data?.data : false
    }catch(e){
        console.log(e)
    }
}
