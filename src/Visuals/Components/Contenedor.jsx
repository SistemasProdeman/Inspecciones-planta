import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { consultarRegById } from '../../ApiReq/consultarReg';
import { sendDetalle } from '../../ApiSend/sendDetalle';
import { setRegistro } from '../../Controllers/actions/userActions';
import CampoRegistro from '../Components/CampoRegistro'
import Swal from 'sweetalert2';


function Contenedor(props) {

    const dispatch = useDispatch();
    const registroCargado   = useSelector(state=>state.sessionReducer.registroCargado);


    const [volver, setVolver]       = useState(false);
    const [categoria, setCategoria] = useState(false);

    if(!categoria){
        Object.keys(registroCargado.data)?.forEach(elem=>{
            if(elem.includes(props.target))setCategoria(registroCargado.data[elem])
        })
    }

        // FUNCION QUE SE PASE A CADA CAMPOREGISTRO COMO PROPS
        // QUE TOME LOS DATOS Y LOS ACTUALICE O CREE

        const confirmAdd=(data)=>{
            Swal.fire({
                title: 'Confirma por favor',
                text: "Deseas cargar estos datos?",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#A7D487',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Cargar',
                cancelButtonText: 'Cancelar'
            }).then(async(result) => {
            if (result.isConfirmed) {
                const newDetalle = await sendDetalle(data)
                console.log('New Detalle => ',  newDetalle)
                if(newDetalle?.info&& newDetalle?.info==='existente'){
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: `Datos ya existentes`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    const reg   = await consultarRegById(registroCargado.id);
                    reg && dispatch(setRegistro(reg))
                    window.location.reload()
                }
                if(newDetalle?.info&& newDetalle?.info==='refrescar'){
                    console.log('newDetalle => ', newDetalle)
                    const reg   = await consultarRegById(registroCargado.id);
                    reg && dispatch(setRegistro(reg))
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Datos cargados con éxito`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    window.location.reload()
                }
                
                }
            })
        }

    const saveChanges = (data)=>{
        confirmAdd(data)
    }

    return (
        <div className='h-full flex flex-col justify-start items-center w-full bg-gray-400'>
            <div className='bg-white w-full h-14 mt-20 mb-10 flex justify-center items-center'>
                <span   className='text-2xl uppercase font-bold tracking-widest text-gray-500'
                    >Residuos Solidos Urbanos</span>
            </div>
            <div className='w-full flex justify-around items-center h-6 mb-10'>
                <span   className='font-semibold '
                    >{`Realizado por ${registroCargado.user.nombre}`}</span>
                <span   className='font-semibold '
                    >{`Fecha : ${registroCargado.fecha}`}</span>
                <span   className='font-semibold '
                    >SEMANA CALCULAR</span>
                <span   className='font-semibold '
                    >{`Sector : ${registroCargado.sector}`}</span>
            </div>

            {Object.keys(categoria)?.map((elem, index)=>{
                return  <div    className='w-5/6 flex flex-col justify-center items-center '
                                key={`ab-${index}-cd`}
                            ><span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                            key={`span-${index}`}
                                >{`${elem.split(' - ')[1]}`}</span>
                            {Object.keys(categoria[elem])?.map((item, index)=>{
                                return <CampoRegistro   texto={item.split(' - ')[1]}
                                                        cumplimiento={elem[item]?.cumplimiento ? elem[item]?.cumplimiento : 'No Aplica'}
                                                        key={`children-${index}`}
                                                        id={categoria[elem][item].itemId}
                                                        detalle={categoria[elem][item].detalle?categoria[elem][item].detalle:false}
                                                        saveFunction={saveChanges}
                                                        extraText={item.includes('Mala práctica')?item.split(' - ')[2]:''}
                                            />
                                })
                            }
                        </div>
                })
            }

            <div className='w-96 flex justify-center items-center my-20'>
                <span className='font-semibold text-gray-800 w-32 h-8 bg-redClass4 hover:bg-redClass shadow-xl rounded-xl ring-1 ring-gray-500 focus:outline-none cursor-pointer flex justify-center items-center'
                        onClick={()=>{setVolver(true)}}
                        >Volver</span>
            </div>
            {volver  && <Redirect to='/BotonesRegistro'/>}
        </div>
    )
}

export default Contenedor

        /* <div className='w-5/6 flex flex-col justify-center items-center '>
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
        </div> */