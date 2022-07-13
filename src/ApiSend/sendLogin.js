
/* import axios from "axios"

export const sendLogin = async(username, password)=>{
    try{
        const response = true // await axios.post(`${process.env.REACT_APP_URLBASE}/bioenergia/users/login`, {username, password})
        return response.data
    }catch(e){
        console.log(e)
    }
} */
////////////////////////////// PROBANDO //////////////////////////////////////////////////////////////////

import axios from "axios"

export const sendLogin = async(username, password)=>{
    try{
        let usuario = username
        const response = await axios.post(`${process.env.REACT_APP_URLBASE}/inspeccion/users/login`, {usuario, password})    
        return response.data
    }catch(e){
        console.log(e)
    }
}