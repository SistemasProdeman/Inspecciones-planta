import React, { useState } from 'react'

function CampoDetalle(props) {

    const [checkRadius, setCheckRadius] = useState('')

    return (
        <div className='w-full bg-gray-300 h-32 flex flex-col justify-center item-center rounded-xl my-2'>
            <span   className='flex justify-center items-center text-lg font-semibold'
                >{props.texto}</span>
            {props.alterText && 
                <span   className='flex justify-center items-center text-sm font-semibold'
                    >{props.alterText}</span>
            }
            <div className='w-full flex justify-around items-center'>
                <div className='flex justify-around items-center w-3/6'>
                    <div className='flex'>
                        <div className='flex flex-col mx-2 justify-center items-center'>
                            <span>100%</span>
                            <input  type='radio'
                                    onClick={()=>{setCheckRadius('100')}}
                                    checked={checkRadius==='100' ? true : false}
                                ></input>
                        </div>
                        <div className='flex flex-col mx-2 justify-center items-center'>
                            <span>50%</span>
                            <input  type='radio'
                                    onClick={()=>{setCheckRadius('50')}}
                                    checked={checkRadius==='50' ? true : false}
                                ></input>
                        </div>
                        <div className='flex flex-col mx-2 justify-center items-center'>
                            <span>0%</span>
                            <input  type='radio'
                                    onClick={()=>{setCheckRadius('0')}}
                                    checked={checkRadius==='0' ? true : false}
                                ></input>
                        </div>
                        <div className='flex flex-col mx-2 justify-center items-center w-20'>
                            <span className='w-20'>No Aplica</span>
                            <input  type='radio'
                                    onClick={()=>{setCheckRadius('')}}
                                    checked={checkRadius==='' ? true : false}
                                ></input>
                        </div>
                    </div>
                    <div>
                        <div className='flex w-52 ml-4 justify-around items-center'>
                            <div className='flex flex-col justify-center items-center w-20'>
                                <span>Acción</span>
                                <span>Correctiva</span>
                                <input  type='checkbox'></input>
                            </div><div className='flex flex-col justify-center items-center w-20'>
                                <span>Acción</span>
                                <span>Inmediata</span>
                                <input  type='checkbox'></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-3/6 flex justify-around items-center'>
                    <div className='flex flex-col w-2/5 justify-center items-center'>
                        <span   className='flex justify-start items-center w-full ml-20' 
                            >Observaciones</span>
                        <input  type='text' 
                                className='w-full h-14 rounded-xl'
                            />
                    </div>
                    <div className='flex flex-col w-2/5 justify-center items-center'>
                        <span   className='flex justify-start items-center w-full ml-20'
                            >Acción tomada</span>
                        <input  type='text' 
                                className='w-full h-14 rounded-xl'
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampoDetalle