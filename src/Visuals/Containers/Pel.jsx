import React from 'react'
// import { Redirect } from 'react-router-dom'
// import CampoRegistro from '../Components/CampoRegistro'
import Contenedor from '../Components/Contenedor'

function Pel() {
    
    // const [volver, setVolver] = useState(false)

    return (
        <div className='h-full flex flex-col justify-start items-center w-full bg-gray-400'>

            <Contenedor target='PEL'/>

            {/* <div className='bg-white w-screen h-14 mt-20 mb-10 flex justify-center items-center'>
                <span   className='text-2xl uppercase font-bold tracking-widest text-gray-500'
                    >Residuos peligrosos</span>
            </div>
            <div className='w-full flex justify-around items-center h-6 mb-10'>
                <span>Realizado por User01</span>
                <span>Fecha : 03/06/22</span>
                <span>Semana : XX</span>
                <span>Sector : XXXXX</span>
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Cartelería</span>
                <CampoRegistro  texto='¿Cada contenedor cuenta con cartelería que especifique que residuos debe contener?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Disposición inicial y clasificación</span>
                <CampoRegistro  texto='¿La disposición inicial es adecuada para reducir el peligro de contaminación al ambiente?'
                    />
                <CampoRegistro  texto='¿Se encuentran adecuadamente clasificados los residuos peligrosos según las categorías inscriptas?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Almacenamiento transitorio</span>
                <CampoRegistro  texto='Los residuos ¿son almacenados de forma segura, disminuyendo al máximo la posibilidad de contaminación ambiental?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Rotulado y etiquetado</span>
                <CampoRegistro  texto='¿Cada unidad de almacenamiento de residuos (bolsa, bidón, bin) ¿se encuentra correctamente etiquetada según el rótulo vigente?'
                    />
            </div>
            <div className='w-96 flex justify-center items-center my-20'>
                <span className='font-semibold text-gray-800 w-32 h-8 bg-redClass4 hover:bg-redClass shadow-xl rounded-xl ring-1 ring-gray-500 focus:outline-none cursor-pointer flex justify-center items-center'
                        onClick={()=>{setVolver(true)}}
                        >Volver</span>
            </div>
            {volver  && <Redirect to='/BotonesRegistro'/>} */}
        </div>
    )
}

export default Pel