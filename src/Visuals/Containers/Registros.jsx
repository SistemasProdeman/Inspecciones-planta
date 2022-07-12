import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import TablaRegistros from '../Components/TablaRegistros'

function Registros() {


    const [volver, setVolver] = useState(false)

    return (
        <div className='h-screen flex flex-col justify-between items-center w-full bg-gray-400'>
            <div className='bg-white w-full h-14 mt-20 mb-10 flex justify-center items-center'>
                <span   className='text-2xl uppercase font-bold tracking-widest text-gray-500'
                    >Historial de Registros</span>
            </div>
            <div className='bg-gray-100 w-5/6 h-3/6 rounded-lg p-2'>
                <div className='w-full h-full flex flex-col justify-start items-center'>
                    <div className='w-full h-10 flex justify-around items-center'>
                        <span   className='w-1/5 flex justify-center items-center border-b border-r border-black' 
                            >Fecha</span>
                        <span   className='w-1/5 flex justify-center items-center border-b border-r border-l border-black' 
                            >Registro N°</span>
                        <span   className='w-1/5 flex justify-center items-center border-b border-r border-l border-black' 
                            >Sector</span>
                        <span   className='w-1/5 flex justify-center items-center border-b border-r border-l border-black' 
                            >Realizado por</span>
                        <span   className='w-1/5 flex justify-center items-center border-b border-l border-black' 
                            >Estado</span>
                    </div>
                    <div className='h-full w-full'>
                        <TablaRegistros />
                    </div>
                </div>
            </div>
            <div className='w-96 flex justify-center items-center my-10'>
                <span className='font-semibold text-gray-800 w-32 h-8 bg-redClass4 hover:bg-redClass shadow-xl rounded-xl ring-1 ring-gray-500 focus:outline-none cursor-pointer flex justify-center items-center'
                        onClick={()=>{setVolver(true)}}
                        >Volver</span>
            </div>
            {volver  && <Redirect to='/Menu'/>}
        </div>
    )
}

export default Registros