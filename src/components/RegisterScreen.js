import React from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { startRegister } from '../actions/auth'


export const RegisterScreen = ({history}) => {
    const dispatch = useDispatch()
    const [inputValue,inputChange]=useForm({
        rFirstname:'',
        rLastname:'',
        rEmail:'',
        rPassword:''
    })
    const {rFirstname,rLastname,rEmail,rPassword}=inputValue

    const handletRegister=(e)=>{
        e.preventDefault();
        dispatch(startRegister(rFirstname,rLastname,rEmail,rPassword))
        history.replace('/auth/login')
    }

    return (
        <div className="front_formulario contenedor">

        <form id="register_form" onSubmit={handletRegister}>
            <input type="text" onChange={inputChange} value={rFirstname} name="rFirstname" id="firstname" autoComplete="off" placeholder="First Name" />
            <input type="text" onChange={inputChange} value={rLastname} name="rLastname" id="lastname" autoComplete="off" placeholder="Last Name" />
            <input type="email" onChange={inputChange} value={rEmail} name="rEmail" id="email" autoComplete="off" placeholder="Email" />
            <input type="password" onChange={inputChange} value={rPassword} name="rPassword" id="password" autoComplete="off" placeholder="Password" />
            <div className="forgot_password">

            </div>
            <input type="submit" value="Register" className="btn btn-login" />
        </form>
        <NavLink className="link_register" to="/auth/login">LogIn</NavLink>
    </div>
    )
}

