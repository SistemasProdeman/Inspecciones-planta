import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import CampoDetalle from '../Components/CampoDetalle'

function DetalleRegistro() {

    const [volver, setVolver] = useState(false)

    return (
        <div className='h-full flex flex-col justify-start items-center w-full bg-gray-400'>
            <div className='bg-white w-full h-14 mt-20 mb-10 flex justify-center items-center'>
                <span   className='text-2xl uppercase font-bold tracking-widest text-gray-500'
                    >Detalle de Registro</span>
            </div>
            <div className='w-full flex justify-around items-center h-6 mb-10'>
                <span>Realizado por User01</span>
                <span>Fecha : 03/06/22</span>
                <span>Semana : XX</span>
                <span>Sector : XXXXX</span>
            </div>
        <div className='bg-gray-200 w-4/6 h-8 mt-4 mb-6 flex justify-center items-center'>
            <span   className='text-2xl uppercase font-bold tracking-widest text-gray-500'
                >Residuos Solidos Urbanos</span>
        </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Orden y limpieza</span>
                <CampoDetalle  texto='¿Las estaciones de RSU internas, se encuentran en condiciones de orden y limpieza?'
                    />
                <CampoDetalle  texto='Las estaciones externas, ¿se encuentran tapadas, sin residuos en el piso y en condiciones de higiene?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Clasificación</span>
                <CampoDetalle  texto='La clasificación según los contenedores del sector, ¿se realiza correctamente?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Ubicación</span>
                <CampoDetalle  texto='Los contenedores, ¿se encuentran ubicados en el sector designado según el plano?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Cartelería</span>
                <CampoDetalle  texto='¿Cada contenedor cuenta con cartelería que especifique que residuos debe contener?'
                    />
            </div>
        <div className='bg-gray-200 w-4/6 h-8 mt-24 mb-6 flex justify-center items-center'>
            <span   className='text-2xl uppercase font-bold tracking-widest text-gray-500'
                >Residuos especiales</span>
        </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Orden y limpieza</span>
                <CampoDetalle  texto='Los residuos especiales o voluminosos del sector, ¿son almacenados adecuadamente, respetando las condiciones de higiene del sector?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Control de generación</span>
                <CampoDetalle  texto='El sector ¿tiene un control de cantidad de la generación de los residuos especiales?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Reducción</span>
                <CampoDetalle  texto='¿Se cuenta con algún objetivo de reducción de los residuos especiales del sector?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Clasificación</span>
                <CampoDetalle  texto='¿Se repetan los estándares de clasificación según cada tipo de residuo?'
                    />
            </div>
        <div className='bg-gray-200 w-4/6 h-8 mt-24 mb-6 flex justify-center items-center'>
            <span   className='text-2xl uppercase font-bold tracking-widest text-gray-500'
                >Residuos peligrosos</span>
        </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Cartelería</span>
                <CampoDetalle  texto='¿Cada contenedor cuenta con cartelería que especifique que residuos debe contener?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Disposición inicial y clasificación</span>
                <CampoDetalle  texto='¿La disposición inicial es adecuada para reducir el peligro de contaminación al ambiente?'
                    />
                <CampoDetalle  texto='¿Se encuentran adecuadamente clasificados los residuos peligrosos según las categorías inscriptas?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Almacenamiento transitorio</span>
                <CampoDetalle  texto='Los residuos ¿son almacenados de forma segura, disminuyendo al máximo la posibilidad de contaminación ambiental?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Rotulado y etiquetado</span>
                <CampoDetalle  texto='¿Cada unidad de almacenamiento de residuos (bolsa, bidón, bin) ¿se encuentra correctamente etiquetada según el rótulo vigente?'
                    />
            </div>
        <div className='bg-gray-200 w-4/6 h-8 mt-24 mb-6 flex justify-center items-center'>
            <span   className='text-2xl uppercase font-bold tracking-widest text-gray-500'
                >Emergencias Ambientales</span>
        </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Antiderrame</span>
                <CampoDetalle  texto='Los elementos de contención o de absorción de derrame, ¿se encuentran completos y adecuadamente ubicados?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Instrucciones</span>
                <CampoDetalle  texto='El sector ¿cuenta con instrucciones claras y precisas sobre el accionamiento ante emergencias ambientales?'
                    />
            </div>
        <div className='bg-gray-200 w-4/6 h-8 mt-24 mb-6 flex justify-center items-center'>
            <span   className='text-2xl uppercase font-bold tracking-widest text-gray-500'
                >Recursos energeticos</span>
        </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Energía eléctrica</span>
                <CampoDetalle  texto='Los equipos o máquinas del sector, ¿se encuentran funcionando con carga?'
                                alterText = 'Mala práctica: equipos funcionando vacíos.'
                    />
                <CampoDetalle  texto='En los sectores inspeccionados, ¿el uso de luminarias es adecuado?'
                                alterText = 'Mala práctica: luces encendidas en sectores donde no hay actividad.'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Gas natural</span>
                <CampoDetalle  texto='¿Funcionan adecuadamente los medidores de caudal de Gas Natural?'
                    />
                <CampoDetalle  texto='¿Se aplican buenas prácticas en el sector para bajar el consumo de gas natural?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >GLP</span>
                <CampoDetalle  texto='¿Se verifica adecuado uso de autoelevadores?'
                                alterText = 'Mala práctica: autoelevadores en marcha sin transportar pallet ni estar en movimiento'
                    />
            </div>
        <div className='bg-gray-200 w-4/6 h-8 mt-24 mb-6 flex justify-center items-center'>
            <span   className='text-2xl uppercase font-bold tracking-widest text-gray-500'
                >Recursos hídricos</span>
        </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Uso de agua</span>
                <CampoDetalle  texto='¿Se evidencian buenas prácticas para el uso de agua, como no dejar mangueras o canillas abiertas o pérdidas por goteo?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Desagϋes</span>
                <CampoDetalle  texto='¿Las condición general de los desagϋes es buena?'
                                alterText= 'Mala práctica: Detectar desagϋes obstruidos, rotos o fuera de la condición normal.'
                    />
                <CampoDetalle  texto='¿Se verifican prácticas de limpieza adecuada para evitar el bloqueo de los desagϋes?'
                    />
            </div>
            <div className='w-5/6 flex flex-col justify-center items-center '>
                <span   className='py-2 border-b my-2 w-5/6 flex justify-center items-center text-2xl text-gray-700 font-semibold font-mono tracking-wider'
                    >Cloacas</span>
                <CampoDetalle  texto='¿Se verifica uso adecuado de las líneas cloacales?'
                                alterText = 'Mala práctica: Vuelco de productos químicos, aceites. Desecho de productos en polvo o granulados por los desagϋes'
                    />
            </div>

            <div className='w-96 flex justify-center items-center my-20'>
                <span className='font-semibold text-gray-800 w-32 h-8 bg-redClass4 hover:bg-redClass shadow-xl rounded-xl ring-1 ring-gray-500 focus:outline-none cursor-pointer flex justify-center items-center'
                        onClick={()=>{setVolver(true)}}
                        >Volver</span>
            </div>
            {volver  && <Redirect to='/Registros'/>}
        </div>
    )
}

export default DetalleRegistro