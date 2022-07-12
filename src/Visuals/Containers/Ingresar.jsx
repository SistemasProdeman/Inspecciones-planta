import React, { useEffect, useState } from 'react'
import '../Assets/GSCustom.css'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { sendLogin } from '../../ApiSend/sendLogin'
import { setSectores, setUsuarios } from '../../Controllers/actions/userActions'







function Ingresar() {

    // const [modalFlag, setmodalFlag] = useState(false);
    // const [timer, setTimer] = useState(false);

    const dispatch = useDispatch()
    const userLog = useSelector(state => state.sessionReducer.userState)

    // const [fieldState, setFieldState] = useState({ 
    //     user: false,
    //     userField:'', 
    //     pass: false,
    //     passField:''
    // })

    useEffect(() => {
        // userLog && setTimer(true)
        // !userLog && setTimer(false)
        //eslint-disable-next-line
    }, [userLog])

    // const getUsers = async()=>{
    //     let list = await getUsuarios()
    //     dispatch(setUsuarios(list))
    // }

    // const getParadaProgYNoProg=async()=>{
    //     let list1 = await getProgramadas();
    //     let list2 = await getNoProgramadas();
    //     dispatch(setProgramadas(list1));
    //     dispatch(setNoProgramadas(list2));
    // }


    // const login=async(username, access, id)=>{
    //     await Swal.fire({
    //         position: 'center',
    //         icon: 'success',
    //         title: 'Bienvenid@ de nuevo',
    //         showConfirmButton: false,
    //         timer: 1500
    //     })
    //     dispatch(setLogin({username, access, id}))
    //     dispatch(setPersonal())
    //     dispatch(setEncargados())
    //     dispatch(setEmpresas())
    //     dispatch(setPlantas())
    //     dispatch(setLineas())
    //     dispatch(setEquipos())
    //     dispatch(setTiposParada())
    //     dispatch(setCausas())
    //     dispatch(setTurnos())
    //     dispatch(setUsers())
    //     dispatch(setRoles())
    //     dispatch(setEstados())
    //     dispatch(setCategorias())
    //     getParadaProgYNoProg()
    //     getUsers()

    //     setmodalFlag(false)
    // }


    //const checkCredentials=(target, data)=>{    
        // if(target==='user' && data.length >=3 )setFieldState({...fieldState, user: true, userField: data});
        // if(target==='user' && data.length < 3 )setFieldState({...fieldState, user: false, userField: data});
        
        // if(target==='pass' && data?.length >= 6)setFieldState({...fieldState, pass: true, passField: data});
        // if(target==='pass' && data?.length < 6 )setFieldState({...fieldState, pass: false, passField: data});
        // return 
    //}

    //const sendCarga =()=>{}

    //const tryLogin=async()=>{

        // const response = await sendCarga(fieldState.userField, fieldState.passField)
        
        // response?.msg==='Usuario inexistente' && await Swal.fire({
        //     position: 'center',
        //     icon: 'error',
        //     title: 'Usuario no registrado',
        //     showConfirmButton: false,
        //     timer: 1500
        // })

        // response.msg==='Datos Incorrectos' && await Swal.fire({
        //     position: 'center',
        //     icon: 'warning',
        //     title: 'Datos incorrectos',
        //     showConfirmButton: false,
        //     timer: 1500
        // })

        // response.msg==='Algo salio mal' && await Swal.fire({
        //     position: 'center',
        //     icon: 'warning',
        //     title: 'Algo salio mal',
        //     showConfirmButton: false,
        //     timer: 1500
        // })
        
    //}

    const logIn =()=>{
        dispatch(setUsuarios())
        dispatch(setSectores())
        sendLogin();
        //dispatch(setLogin({username, access, id}))
        // dispatch(setEncargados())
        // dispatch(setEmpresas())
        // dispatch(setPlantas())
        setRedireccion(true)
    }

    
    const [redireccion, setRedireccion] = useState(false)


    return (
        <div className='bg-gray-400 w-screen h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center w-80 h-96 bg-gray-300 p-6 rounded-xl'>
                <div>
                    <img src='https://i.imgur.com/u5eNewP.png' alt='Logo PDM'/>
                </div>
                <div className='flex flex-col justify-center items-center my-10'>
                    <span   className=' text-xl font-semibold tracking-wider text-gray-700'
                        >Usuario</span>
                    <input  className='rounded-xl'
                        />
                    <span   className=' text-xl font-semibold tracking-wider text-gray-700'
                        >Contraseña</span>
                    <input  className='rounded-xl'
                        />
                </div>
                <div>
                    <button onClick={logIn}
                        className='w-44 h-10  rounded-2xl bg-brown-200 hover:bg-greenClass cursor-pointer font-bold tracking-widest focus:outline-none'

                    >INGRESAR</button>
                </div>
            </div>
            {redireccion && <Redirect to='/Menu'/>}
        </div>
    )
}

export default Ingresar
