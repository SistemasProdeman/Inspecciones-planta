import axios from 'axios';


export async function getHistorial() {
    try{
        const response = await axios.get(`${process.env.REACT_APP_HISTORIAL}/allRegistros`);
        return response?response.data.data:false;
    }catch(e){
        console.log(e);
    }
}