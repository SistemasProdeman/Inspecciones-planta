import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createRegistro } from '../../ApiSend/sendNewReg';

function NuevoRegistro() {

    const responsables  = useSelector(state=>state.sessionReducer.sessionData.usersList);
    const sectores      = useSelector(state=>state.sessionReducer.sectores);
    const registroCargado   = useSelector(state=>state.sessionReducer.registroCargado);

    const [desconect, setDesconect] = useState(false)
    const [continuar, setContinuar] = useState(false)

    const [registro, setRegistro]   = useState({
        fecha           : new Date().toISOString().split('T')[0].split('-').reverse().join('-'),
        inspector       : 'Usuario Logeado',
        sectorId        : '',
        estado          : 'Pendiente',
        responsable     : '',
        usuarioId       : 3
    })
    console.log(registro)
    const handleResponsable = (e)=>{
        setRegistro({
            ...registro,
            responsable: e.target.value
        })
    }

    const handleSector = (e)=>{
        setRegistro({
            ...registro,
            sectorId: Number(e.target.value)
        })
    }

    const handleNext = async()=>{
        const response = await createRegistro(registro)
        response && setTimeout(setContinuar(true), 4000)
    }

    //  ESTE PANEL AL SELECCIONAR SECTOR Y TAL, DEBE CONSULTAR A LA DB 
    //  POR ALGO ABIERTO CON ESTE USUARIO Y ESTE SECTOR
    //  DE HABER UNO, DEBE CARGAR ESE, DE NO HABER, DEBE ABRIR UNO NUEVO

    console.log(registroCargado)

    return (
        <div>
            <div className='h-screen flex flex-col justify-start items-center w-full bg-gray-400'>
                <div className='bg-white w-screen h-14 mt-20 mb-32 flex justify-center items-center'>
                    <span   className='text-2xl tracking-widest font-semibold text-gray-600'
                        >NUEVO REGISTRO</span>
                </div>
                <div className='w-screen h-screen'>
                    <div className='w-screen flex flex-col justify-center items-center'>
                        <div className='flex flex-col justify-center items-center mb-4'>
                            <span className='font-semibold text-gray-700 text-xl'
                                >Responsable de planta</span>
                            {registroCargado?.responsable?
                             <span  className='w-52 cursor-pointer px-2 h-8 rounded-xl focus:outline-none flex justify-center items-center bg-white'
                                >{registroCargado.responsable}</span>   
                            :    
                                <select className='w-52 cursor-pointer px-2 h-8 rounded-xl focus:outline-none' 
                                        onChange={handleResponsable}
                                    ><option    key={'no-select-responsable'}
                                                value={0}
                                            >{' - '}</option>
                                    {Object.values(responsables)?.filter(item=>item.Rol==='RESPONSABLE')?.map((elem, index)=>{
                                        return <option  key={index}
                                                        value={elem.id}
                                                        className='hover:text-white hover:bg-gray-300'
                                            >{elem.Nombre}</option>
                                    })}
                                </select>
                            }
                        </div>
                        <div className='flex flex-col justify-center items-center mt-4'>
                            <span className='font-semibold text-gray-700 text-xl'
                                >Sector de inspección</span>
                            {registroCargado?.sectorId?
                                <span  className='w-52 cursor-pointer px-2 h-8 rounded-xl focus:outline-none flex justify-center items-center bg-white'
                                >{registroCargado.sectorId}</span>  
                            :
                                <select className='w-52 cursor-pointer px-2 h-8 rounded-xl focus:outline-none'
                                        onChange={handleSector}
                                    ><option    key={'no-select-sector'}
                                            value={0}
                                        >{' - '}</option>
                                    {Object.values(sectores)?.map((elem, index)=>{
                                    return <option  key={index}
                                                    value={elem.id}
                                                    className='hover:text-white hover:bg-gray-300'
                                        >{elem.nombre}</option>
                                    })}
                                </select>
                            }
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='w-96 flex justify-between items-center mt-40'>
                            <span className='font-semibold text-gray-800 w-32 h-8 bg-greenClass6 hover:bg-greenClass shadow-xl rounded-xl ring-1 ring-gray-500 focus:outline-none cursor-pointer flex justify-center items-center'
                                    onClick={handleNext}
                                >Guardar</span>
                            <span className='font-semibold text-gray-800 w-32 h-8 bg-redClass6 hover:bg-redClass shadow-xl rounded-xl ring-1 ring-gray-500 focus:outline-none cursor-pointer flex justify-center items-center'
                                    onClick={()=>{setDesconect(true)}}
                                >Cancelar</span>
                        </div>
                    </div>
                </div>
        {desconect  && <Redirect to='/Menu'/>}
        {continuar  && <Redirect to='/BotonesRegistro'/>}
            </div>
        </div>
    )
}

export default NuevoRegistro