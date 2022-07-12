import axios from 'axios';


export async function getUserList() {
    try{
        const response = await (await axios.get(`${process.env.REACT_APP_REGISTRO}/getUsers`));
        return response.data.data;
    }catch(e){
        console.log(e);
    }
}

export async function getFrontData() {
    try{
        const response = await axios.get(`${process.env.REACT_APP_REGISTRO}/getFrontData`);
        return response?response.data.data:false;
    }catch(e){
        console.log(e);
    }
}

export async function getSectores() {
    try{
        const response = await axios.get(`${process.env.REACT_APP_REGISTRO}/getSectores`);
        return response?response.data.data:false;
    }catch(e){
        console.log(e);
    }
}

