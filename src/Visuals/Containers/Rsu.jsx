import React from 'react'
// import { useSelector } from 'react-redux';
// import { Redirect } from 'react-router-dom'
// import CampoRegistro from '../Components/CampoRegistro'
import Contenedor from '../Components/Contenedor';


function Rsu() {

    
    // const registroCargado   = useSelector(state=>state.sessionReducer.registroCargado);

    // const [volver, setVolver] = useState(false)

    return (
        <div className='h-full flex flex-col justify-start items-center w-full bg-gray-400'>

            <Contenedor target='RSU'/>
            {/* <div className='bg-white w-full h-14 mt-20 mb-10 flex justify-center items-center'>
                <span   className='text-2xl uppercase font-bold tracking-widest text-gray-500'
                    >Residuos Solidos Urbanos</span>
            </div>
            <div className='w-full flex justify-around items-center h-6 mb-10'>
                <span>Realizado por User01</span>
                <span>Fecha : 03/06/22</span>
                <span>Semana : XX</span>
                <span>Sector : XXXXX</span>
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Orden y limpieza</span>
                <CampoRegistro  texto='¿Las estaciones de RSU internas, se encuentran en condiciones de orden y limpieza?'
                    />
                <CampoRegistro  texto='Las estaciones externas, ¿se encuentran tapadas, sin residuos en el piso y en condiciones de higiene?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Clasificación</span>
                <CampoRegistro  texto='La clasificación según los contenedores del sector, ¿se realiza correctamente?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Ubicación</span>
                <CampoRegistro  texto='Los contenedores, ¿se encuentran ubicados en el sector designado según el plano?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Cartelería</span>
                <CampoRegistro  texto='¿Cada contenedor cuenta con cartelería que especifique que residuos debe contener?'
                    />
            </div>
            <div className='w-96 flex justify-center items-center my-20'>
                <span className='font-semibold text-gray-800 w-32 h-8 bg-redClass4 hover:bg-redClass shadow-xl rounded-xl ring-1 ring-gray-500 focus:outline-none cursor-pointer flex justify-center items-center'
                        onClick={()=>{setVolver(true)}}
                        >Volver</span>
            </div> */}
            {/* {volver  && <Redirect to='/BotonesRegistro'/>} */}
        </div>
    )
}

export default Rsu