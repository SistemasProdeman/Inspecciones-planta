import axios from 'axios';



export async function consultarReg(id) {
    try{
        const registroObtenido    = await axios.post(`${process.env.REACT_APP_HISTORIAL}/getRegistroPendiente`, {id: id});
        return registroObtenido?registroObtenido.data.data:false;
    }catch(e){
        console.log(e);
    }
}

export async function consultarRegById(id) {
    try{
        const response    = await axios.post(`${process.env.REACT_APP_HISTORIAL}/getRegistroById`, {id: id});
        return response?response.data.data:false;
    }catch(e){
        console.log(e);
    }
}
