import { SET_FRONT_DATA, SET_REGISTRO, SET_SECTORES, SET_USUARIOS } from "../../constant"

const initialState = {

    // este es el estado persistente, utilizar solo para informacion necesaria
    logged:{
        username:   '',
        userId:     ''
    },
    sectores:{},
    sessionData:{
        usersList:[],
    },
    generalData:{},
    registroCargado:{},

}

export default function sessionReducer(state=initialState, {type,payload}){
    switch(type){

        case SET_USUARIOS:
            return {
                ...state,
                logged:{
                    username:   'Usuario',
                    userId:     3
                },
                sessionData:{
                    ...state.sessionData,
                    usersList: payload
                }
            }
        
        case SET_SECTORES:
            return {
                ...state,
                sectores: payload
            }

        case SET_REGISTRO:
            return{
                ...state,
                registroCargado: payload
            }

        case SET_FRONT_DATA:
            return{
                ...state,
                generalData: payload
            }

            // REDUX PERSIST

        case 'persist/REHYDRATE':
            // en esta opcion vuelve a ingresar el estado al refrescar, NO OLVIDAR agregar todo si algo falta
            if(payload){
                return {
                    ...state,
                    logged:             payload.sessionReducer.logged           || state.logged,
                    sessionData:        payload.sessionReducer.sessionData      || state.sessionData,
                    registroCargado:    payload.sessionReducer.registroCargado  || state.registroCargado,
                    generalData:        payload.sessionReducer.generalData      || state.generalData,
                    sectores:           payload.sessionReducer.sectores         || state.sectores,
                    
                    //userState: payload.sessionReducer.userState || state.userState,
                    
                }
            }
            return {
                ...state
            }

            
        default: 
        return {...state}
    }
}