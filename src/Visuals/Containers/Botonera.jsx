import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom'


function Botonera() {

    const [iniciarReg, setIniciarReg] = useState('');
    const registroCargado   = useSelector(state=>state.sessionReducer.registroCargado);
        console.log('REGISTRO CARGADO => ', registroCargado);

    const [rsu, setRsu]         = useState('vacio');
    const [esp, setEsp]         = useState('vacio');
    const [pel, setPel]         = useState('vacio');
    const [emer, setEmer]       = useState('vacio');
    const [energia, setEnergia] = useState('vacio');
    const [agua, setAgua]       = useState('vacio');


    const [completo, setCompleto]  = useState(false);


    if(registroCargado){
        console.log(registroCargado)
        
        Object.keys(registroCargado?.data)?.forEach(elem=>{
            
            if(elem.includes('RSU')){           // ------------------ RSU ----------------------------------
                let aux = 0;
                let cump=0;
                
                    Object.values(registroCargado.data[elem])?.forEach(item=>{
                        aux+= Object.values(item).length;

                        Object.values(item)?.forEach(x=>{
                            if(x.detalle.cumplimiento.id)cump+=1;
                        })
                })

                if(cump!==0 && rsu==='vacio')   setRsu('pendiente');
                if(cump===aux && rsu!=='Completo')  setRsu('Completo');  // SOLUCIONAR ESTE BUG 
            }

            if(elem.includes('ESP')){           // ------------------ ESP ----------------------------------
                let aux = 0;
                let cump=0;
                
                    Object.values(registroCargado.data[elem])?.forEach(item=>{
                        aux+= Object.values(item).length;

                        Object.values(item)?.forEach(x=>{
                            if(x.detalle.cumplimiento.id)cump+=1;
                        })
                })

                if(cump!==0 && esp==='vacio')    setEsp('pendiente');
                if(cump===aux && esp!=='Completo')  setEsp('Completo');
            }

            if(elem.includes('PEL')){           // ------------------ PEL ----------------------------------
                let aux = 0;
                let cump=0;
                
                    Object.values(registroCargado.data[elem])?.forEach(item=>{
                        aux+= Object.values(item).length;

                        Object.values(item)?.forEach(x=>{
                            if(x.detalle.cumplimiento.id)cump+=1;
                        })
                })

                if(cump!==0 && pel==='vacio')setPel('pendiente');
                if(cump===aux && pel!=='Completo')setPel('Completo');
            }

            if(elem.includes('EMER')){          // ------------------ EMER ----------------------------------
                let aux = 0;
                let cump=0;
                
                    Object.values(registroCargado.data[elem])?.forEach(item=>{
                        aux+= Object.values(item).length;

                        Object.values(item)?.forEach(x=>{
                            if(x.detalle.cumplimiento.id)cump+=1;
                        })
                })

                if(cump!==0 && emer==='vacio')setEmer('pendiente');
                if(cump===aux && emer!=='Completo')setEmer('Completo');
            }

            if(elem.includes('ENERGIA')){           // ------------------ ENERGIA ----------------------------------
                let aux = 0;
                let cump=0;
                
                    Object.values(registroCargado.data[elem])?.forEach(item=>{
                        aux+= Object.values(item).length;

                        Object.values(item)?.forEach(x=>{
                            if(x.detalle.cumplimiento.id)cump+=1;
                        })
                })

                if(cump!==0 && energia==='vacio')setEnergia('pendiente');
                if(cump===aux && energia!=='Completo')setEnergia('Completo');
            }

            if(elem.includes('AGUA')){              // ------------------ AGUA ----------------------------------
                let aux = 0;
                let cump=0;
                
                    Object.values(registroCargado.data[elem])?.forEach(item=>{
                        aux+= Object.values(item).length;

                        Object.values(item)?.forEach(x=>{
                            if(x.detalle.cumplimiento.id)cump+=1;
                        })
                })

                if(cump!==0 && agua==='vacio')setAgua('pendiente');
                if(cump===aux && agua!=='Completo')setAgua('Completo');
            }
            if(((((rsu==='Completo' && pel==='Completo') && esp==='Completo') && emer==='Completo') && energia==='Completo') && agua==='Completo'){
                setCompleto(true)
            }   
        })
    }

        console.log('TEST => ', registroCargado.id)

    const changeState = async ()=>{
        //const response = await changeStatus()
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center w-full bg-gray-400'>
            <div className='w-screen h-screen flex flex-col justify-center items-center'>
                <div className='flex w-5/6 justify-around items-center h-32 '>
                    <span className={`${rsu==='Completo'?'bg-greenClass6':rsu==='pendiente'?'bg-orangeClass6':'bg-gray-300'} 
                                h-14 font-semibold text-gray-800 w-44 shadow-xl rounded-xl ring-1 ring-gray-500 focus:outline-none cursor-pointer flex justify-center items-center`}
                            onClick={()=>{setIniciarReg('RSU')}}
                            >RSU</span>
                    <span className={`${esp==='Completo'?'bg-greenClass6':esp==='pendiente'?'bg-orangeClass6':'bg-gray-300'} 
                                h-14 font-semibold text-gray-800 w-44 shadow-xl rounded-xl ring-1 ring-gray-500 focus:outline-none cursor-pointer flex justify-center items-center`}
                            onClick={()=>{setIniciarReg('ESP')}}
                            >ESP</span>
                    <span className={`${pel==='Completo'?'bg-greenClass6':pel==='pendiente'?'bg-orangeClass6':'bg-gray-300'} 
                                h-14 font-semibold text-gray-800 w-44 shadow-xl rounded-xl ring-1 ring-gray-500 focus:outline-none cursor-pointer flex justify-center items-center`}
                            onClick={()=>{setIniciarReg('PEL')}}
                            >PEL</span>
                </div>
                <div className='flex w-5/6 justify-around items-center h-32 '>
                    <span className={`${emer==='Completo'?'bg-greenClass6':emer==='pendiente'?'bg-orangeClass6':'bg-gray-300'} 
                                h-14 font-semibold text-gray-800 w-44 shadow-xl rounded-xl ring-1 ring-gray-500 focus:outline-none cursor-pointer flex justify-center items-center`}
                            onClick={()=>{setIniciarReg('EMER')}}
                            >EMER</span>
                    <span className={`${energia==='Completo'?'bg-greenClass6':energia==='pendiente'?'bg-orangeClass6':'bg-gray-300'} 
                                h-14 font-semibold text-gray-800 w-44 shadow-xl rounded-xl ring-1 ring-gray-500 focus:outline-none cursor-pointer flex justify-center items-center`}
                            onClick={()=>{setIniciarReg('ENERGIA')}}
                            >ENERGIA</span>
                    <span className={`${agua==='Completo'?'bg-greenClass6':agua==='pendiente'?'bg-orangeClass6':'bg-gray-300'} 
                                h-14 font-semibold text-gray-800 w-44 shadow-xl rounded-xl ring-1 ring-gray-500 focus:outline-none cursor-pointer flex justify-center items-center`}
                            onClick={()=>{setIniciarReg('AGUA')}}
                            >AGUA</span>
                </div> 
                <div className='w-full flex justify-center items-center'>
                    <div className='w-96 flex justify-center items-center mt-20'>
                        <span   className={`${completo?'cursor-pointer bg-greenClass4 hover:bg-greenClass':'cursor-not-allowed bg-gray-500 hover:bg-gray-600'} font-semibold text-gray-800 w-32 h-8 shadow-xl rounded-xl ring-1 ring-gray-500 focus:outline-none cursor-pointer flex justify-center items-center`}
                                onClick={completo?changeState:()=>{}} // FUNCION QUE UPDATEA EL REGISTRO CAMBIANDO EL ESTADO
                            >Finalizar</span>
                    </div>
                    <div className='w-96 flex justify-center items-center mt-20'>
                        <span   className='font-semibold text-gray-800 w-32 h-8 bg-redClass4 hover:bg-redClass shadow-xl rounded-xl ring-1 ring-gray-500 focus:outline-none cursor-pointer flex justify-center items-center'
                                onClick={()=>{setIniciarReg('volver')}}
                            >Volver</span>
                    </div>
                </div>

                {iniciarReg==='RSU'     && <Redirect to='/Rsu'/>}
                {iniciarReg==='ESP'     && <Redirect to='/Esp'/>}
                {iniciarReg==='PEL'     && <Redirect to='/Pel'/>}
                {iniciarReg==='EMER'    && <Redirect to='/Emer'/>}
                {iniciarReg==='ENERGIA' && <Redirect to='/Energia'/>}
                {iniciarReg==='AGUA'    && <Redirect to='/Agua'/>}
                {iniciarReg==='volver'  && <Redirect to='/NuevoRegistro'/>}
            </div>
        </div>
    )
}

export default Botonera