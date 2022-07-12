import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function CampoRegistro(props) {

    const data   = useSelector(state=>state.sessionReducer.generalData);
    const registroCargado   = useSelector(state=>state.sessionReducer.registroCargado); console.log(registroCargado)
    
    const [checkRadius, setCheckRadius]         = useState(4)
    const [observation, setObservation]         = useState('')
    const [remediacion_01, setRemediacion_01]   = useState('0');
    const [remediacion_02, setRemediacion_02]   = useState('0');
    const [existente, setExistente]             = useState(false);


    const checkedChange=(e)=>{
        setCheckRadius(Number(e.target.id))
    }
    const handleObser=(e)=>{
        setObservation(e.target.value)
    }
        // remediacion, observacion, registroId, itemId, cumplimientoId
    const saveButton=()=>{
        // ORDEN => remediacion, observacion, registroId, itemId, cumplimientoId, detalleId
        let obj={
            remediacion     : `${remediacion_01}${remediacion_02}`,
            observacion     : observation,
            registroId      : registroCargado.id,
            itemId          : props.id,
            cumplimientoId  : checkRadius,
            detalleId       : props.detalle.detalleId?props.detalle.detalleId:false
        }
        props.saveFunction(obj)
    }


    // eslint-disable-next-line 
    useEffect(() => {
        if(props.detalle.detalleId){setExistente(false)}

        if(checkRadius===4 && props.detalle?.cumplimiento?.id){setCheckRadius(props.detalle.cumplimiento.id)}

        if((remediacion_01==='0' && remediacion_02==='0') && props.detalle.remediacion){
            let remediaciones=props.detalle.remediacion.split('');
            setRemediacion_01(remediaciones[0])
            setRemediacion_02(remediaciones[1])
        }
        if(observation==='' && props.detalle.observacion){
            setObservation(props.detalle.observacion)
        }
    },)


    props.extraText && console.log('EXTRA TEXTO => ', props.extraText)


    return (props.detalle?
        <div className='w-full bg-gray-300 h-40 flex flex-col justify-center item-center rounded-xl my-2'>
            <span   className='flex justify-center items-center text-lg font-semibold'
                >{props.texto}</span>
            {props.extraText && 
                <span   className='flex justify-center items-center text-sm font-semibold'
                    >{props.extraText}</span>
            }
            <div className='w-full flex justify-around items-center'>
                <div className='flex justify-around items-center w-96 ml-10'>
                    <div className='flex'>
                    {Object.values(data.cumplimientos)?.map((elem, index)=>{
                        return <div className='flex flex-col justify-center items-center'
                                    key={`div--${index}`}
                                >
                                    <span   className={`${elem.nombre.length<4?'w-14':'w-20'} h-8 font-semibold flex justify-center items-center`}
                                            key={`span--${index}--`}
                                    >{elem.nombre.length<4?`${elem.nombre} %`:elem.nombre}</span>
                                    <input  type='radio'
                                            onClick={checkedChange}
                                            checked={checkRadius===elem.id ? true : false}  
                                            key={`radio--${index}--`}
                                            id={elem.id}
                                        ></input>
                                </div>
                        })}
                    </div>
                    <div>
                        <div className='flex w-52 ml-4 justify-around items-center'>
                            <div className='flex flex-col justify-center items-center w-20'>
                                <span>Acción</span>
                                <span className='font-semibold'
                                    >Correctiva</span>
                                <input  type='checkbox'
                                        onChange={()=>remediacion_01==='0'?setRemediacion_01('1'):setRemediacion_01('0')}
                                        checked={remediacion_01==='1'?true:false}
                                    ></input>
                            </div>
                            <div className='flex flex-col justify-center items-center w-20'>
                                <span>Acción</span>
                                <span className='font-semibold'
                                    >Inmediata</span>
                                <input  type='checkbox'
                                        onChange={()=>{remediacion_02==='0'?setRemediacion_02('1'):setRemediacion_02('0')}}
                                        checked={remediacion_02==='1'?true:false}
                                    ></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-64 justify-center items-center'>
                    <span className='font-semibold'
                        >Observaciones</span>
                    <input  type='text' 
                            className='w-64 h-16 px-2 rounded-xl flex justify-center items-center focus:outline-none'
                            onChange={handleObser}
                            value={observation}
                        />
                </div>
                <div>
                    <button className={`${existente?'bg-yellow-500':'bg-greenClass6'} w-20 h-10 bg-white rounded-xl hover:bg-greenClass focus:outline-none shadow-2xl`}
                            onClick={saveButton}
                        >{`${existente?'Editar':'Guardar'}`}</button>
                </div>
            </div>
        </div>
        :
        <div className='w-full bg-gray-300 h-40 flex flex-col justify-center item-center rounded-xl my-2'>
            <span   className='flex justify-center items-center text-lg font-semibold'
                >{props.texto}</span>
            {props.extraText && 
                <span   className='flex justify-center items-center text-sm font-semibold'
                    >{props.extraText}</span>
            }
            <div className='w-full flex justify-around items-center'>
                <div className='flex justify-around items-center w-96 ml-10'>
                    <div className='flex'>
                    {Object.values(data.cumplimientos)?.map((elem, index)=>{
                        return <div className='flex flex-col justify-center items-center'
                                    key={`div--${index}`}
                                >
                                    <span   className={`${elem.nombre.length<4?'w-14':'w-20'} h-8 font-semibold flex justify-center items-center`}
                                            key={`span--${index}--`}
                                    >{elem.nombre.length<4?`${elem.nombre} %`:elem.nombre}</span>
                                    <input  type='radio'
                                            onClick={checkedChange}
                                            checked={checkRadius===elem.id ? true : false}  
                                            key={`radio--${index}--`}
                                            id={elem.id}
                                        ></input>
                                </div>
                        })}
                    </div>
                    <div>
                        <div className='flex w-52 ml-4 justify-around items-center'>
                            <div className='flex flex-col justify-center items-center w-20'>
                                <span>Acción</span>
                                <span className='font-semibold'
                                    >Correctiva</span>
                                <input  type='checkbox'
                                        onChange={()=>remediacion_01==='0'?setRemediacion_01('1'):setRemediacion_01('0')}
                                        checked={remediacion_01==='1'?true:false}
                                    ></input>
                            </div>
                            <div className='flex flex-col justify-center items-center w-20'>
                                <span>Acción</span>
                                <span className='font-semibold'
                                    >Inmediata</span>
                                <input  type='checkbox'
                                        onChange={()=>{remediacion_02==='0'?setRemediacion_02('1'):setRemediacion_02('0')}}
                                        checked={remediacion_02==='1'?true:false}
                                    ></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-64 justify-center items-center'>
                    <span className='font-semibold'
                        >Observaciones</span>
                    <input  type='text' 
                            className='w-64 h-16 px-2 rounded-xl flex justify-center items-center focus:outline-none'
                            onChange={handleObser}
                            value={observation}
                        />
                </div>
                <div>
                    <button className={`${existente?'bg-yellow-500':'bg-greenClass6'} w-20 h-10 bg-white rounded-xl hover:bg-greenClass focus:outline-none shadow-2xl`}
                            onClick={saveButton}
                        >{`${existente?'Editar':'Guardar'}`}</button>
                </div>
            </div>
        </div>
    )
}

export default CampoRegistro