import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

function TablaRegistros() {

    

    const [detalle, setDetalle] = useState(false)

    return (
        <div className='w-full h-full'>
            <div className='w-full h-8 flex justify-around items-center hover:bg-orangeClass2'
                    onClick={()=>{setDetalle(true)}}
                >
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >03/06/22</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >004</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >XXXX</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >User04</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >Completo</span>
            </div>
            <div className='w-full h-8 flex justify-around items-center bg-gray-300 hover:bg-orangeClass2'
                    onClick={()=>{setDetalle(true)}}
                >
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >02/06/22</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >003</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >XXXX</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >User03</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >Completo</span>
            </div>
            <div className='w-full h-8 flex justify-around items-center hover:bg-orangeClass2'
                    onClick={()=>{setDetalle(true)}}
                >
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >03/06/22</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >002</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >XXXX</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >User02</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >Completo</span>
            </div>
            <div className='w-full h-8 flex justify-around items-center bg-gray-300 hover:bg-orangeClass2'
                    onClick={()=>{setDetalle(true)}}
                >
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >02/06/22</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >001</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >XXXX</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >User01</span>
                <span className='w-1/5 cursor-pointer h-8 border-b border-gray-400 flex justify-center items-center'
                    >Completo</span>
            </div>
            {detalle  && <Redirect to='/DetalleRegistro'/>}
        </div>
    )
}

export default TablaRegistros