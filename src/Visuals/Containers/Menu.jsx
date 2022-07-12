import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { consultarReg } from '../../ApiReq/consultarReg'
import { getFrontData } from '../../ApiReq/getAllDataSession'
import { getHistorial } from '../../ApiReq/getHistorial'
import { setFrontData, setRegistro } from '../../Controllers/actions/userActions'


function Menu() {

    const [newRegister, setNewRegister] = useState(false)
    const [oldRegisters, setOldRegisters] = useState(false)
    const [desconect, setDesconect] = useState(false)
    const [ready, setReady]         = useState(false)

    const dispatch = useDispatch()

    const userLog           = useSelector(state=>state.sessionReducer.logged);
    const registroCargado   = useSelector(state=>state.sessionReducer.registroCargado);
    
    const consult = async(id)=>{
        const reg   = await consultarReg(id);
        const data  = await getFrontData();
        reg && setReady(true);
        
        dispatch(setRegistro(reg))
        dispatch(setFrontData(data))
    }

    useEffect(() => {
        (!ready && userLog) && consult(userLog.userId)
    }, )

    console.log(registroCargado)

    return (
        <div className='h-screen flex flex-col justify-start items-center w-full bg-gray-400'>
                <div>
                    <div className='bg-white w-screen h-24 mt-20 mb-52 flex justify-center items-center'>
                        <img    src='https://i.imgur.com/u5eNewP.png' alt='Logo PDM'
                                className='w-80'
                            />
                    </div>
                    <div className='w-screen flex justify-center items-center'>
                        <button onClick={()=>{setOldRegisters(true)}}
                                className='bg-white rounded-xl w-44 h-10 mx-20 shadow-xl hover hover:bg-gray-600 font-semibold hover:text-white cursor-pointer focus:outline-none'
                            >Historial Registros</button>
                        <button onClick={()=>{setNewRegister(true)}}
                                className='bg-white rounded-xl w-44 h-10 mx-20 shadow-xl hover hover:bg-gray-600 font-semibold hover:text-white cursor-pointer focus:outline-none'
                            >{ready?'Continuar':'Nuevo Registro'}</button>
                    </div>

                    {newRegister    && <Redirect to='/NuevoRegistro'/>}
                    {oldRegisters   && <Redirect to='/Registros'/>}
                    {desconect      && <Redirect to='/'/>}
                    {(newRegister && ready) && <Redirect to='/BotonesRegistro'/>}

                    <div className='w-full flex justify-center items-center'>
                        <button className='w-44 bg-gray-200 mt-40 rounded-xl'
                                onClick={()=>{setDesconect(true)}}
                            >Desconectar</button>
                    </div>
                </div>
        </div>
    )
}

export default Menu
