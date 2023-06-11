import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { startLogin } from '../actions/auth'
import { useDispatch } from 'react-redux'
import { fetchToken } from '../helpers/fetch'

import Swal from 'sweetalert2'

export const LoginScreen = ({ history }) => {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const [fields, inputChange] = useForm({
        email: '',
        password: ''
    })
    const { email, password } = fields;

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            console.log("email", email);
            if (email !== '' && password !== '') {
                setIsLoading(true);
                console.log("fields", fields);
                const resp = await (await fetchToken('login', fields, 'POST')).json();
                console.log("RESP", resp);
                if (!!resp.errors) {
                    setIsLoading(false);
                    return Swal.fire('Error', 'Invalid Credentials!', 'error');
                };
                setIsLoading(false);
                dispatch(startLogin(resp));
                return;
            }
            Swal.fire('Error', 'Required fields are empty!', 'error')

        } catch (error) {
            throw new Error('Error: Invalid Request!',error)
        }


    }

    return (
        <div className="front_formulario contenedor">
            <div className="contenedor">
                <span className="error spaceTopSmall d-block text-center">{error && error}</span>
                <form onSubmit={handleLogin} className="formLogin spaceBottomSmall" >
                    <input type="text" name="email"
                        onChange={inputChange}
                        placeholder="Email"
                        value={email}
                    />
                    <input type="password"
                        name="password"
                        onChange={inputChange}
                        placeholder="Senha"
                        value={password}
                    />
                    <div className="olvidaste_pass">
                        <span>Esqueceu a senha?</span>
                    </div>

                    <input type="submit" value={isLoading ? 'Carregando...' : 'Entrar na plataforma'} className="btn btn-login" />
                    <NavLink className="enlace_registro" to="/auth/register">Register</NavLink>
                </form>
            </div>
        </div>
    )
}
