
import axios from "axios"

export const sendLogin = async(username, password)=>{
    try{
        const response = true // await axios.post(`${process.env.REACT_APP_URLBASE}/bioenergia/users/login`, {username, password})
        return response.data
    }catch(e){
        console.log(e)
    }
}