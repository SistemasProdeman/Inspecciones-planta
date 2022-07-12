
import axios from "axios"

export const sendDetalle = async(data)=>{
    try{
        const response = await axios.post(`${process.env.REACT_APP_REGISTRO}/newDetalle`, data)
        return response.data
    }catch(e){
        console.log(e)
    }
}
