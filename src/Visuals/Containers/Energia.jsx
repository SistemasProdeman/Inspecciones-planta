import React from 'react'
// import { Redirect } from 'react-router-dom'
// import CampoRegistro from '../Components/CampoRegistro'
import Contenedor from '../Components/Contenedor'

function Energia() {
    
    // const [volver, setVolver] = useState(false)

    return (
        <div className='h-full flex flex-col justify-start items-center w-full bg-gray-400'>

            <Contenedor target='ENERGIA'/>

            {/* <div className='bg-white w-screen h-14 mt-20 mb-10 flex justify-center items-center'>
                <span   className='text-2xl uppercase font-bold tracking-widest text-gray-500'
                    >Recursos energeticos</span>
            </div>
            <div className='w-full flex justify-around items-center h-6 mb-10'>
                <span>Realizado por User01</span>
                <span>Fecha : 03/06/22</span>
                <span>Semana : XX</span>
                <span>Sector : XXXXX</span>
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Energía eléctrica</span>
                <CampoRegistro  texto='Los equipos o máquinas del sector, ¿se encuentran funcionando con carga?'
                                alterText = 'Mala práctica: equipos funcionando vacíos.'
                    />
                <CampoRegistro  texto='En los sectores inspeccionados, ¿el uso de luminarias es adecuado?'
                                alterText = 'Mala práctica: luces encendidas en sectores donde no hay actividad.'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Gas natural</span>
                <CampoRegistro  texto='¿Funcionan adecuadamente los medidores de caudal de Gas Natural?'
                    />
                <CampoRegistro  texto='¿Se aplican buenas prácticas en el sector para bajar el consumo de gas natural?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >GLP</span>
                <CampoRegistro  texto='¿Se verifica adecuado uso de autoelevadores?'
                                alterText = 'Mala práctica: autoelevadores en marcha sin transportar pallet ni estar en movimiento'
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

export default Energia