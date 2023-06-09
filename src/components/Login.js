import React from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { startLogin } from './auth'
import { useDispatch } from 'react-redux'
import { fetchSinToken } from '../helpers/fetch'

import Swal from 'sweetalert2'
import { types } from '../types/types';

export const LoginScreen = ({ history }) => {
    const [error, setError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSelect, setIsSelect] = React.useState(false);
    
    const dispatch = useDispatch();

    const [fields, inputChange] = useForm({
        email: '',
        password: ''
    })
    const { email, password } = fields;

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (email !== '' && password !== '') {
                setIsLoading(true);
                const resp = await (await fetchSinToken('login', fields, 'POST')).json();
                if (!!resp.errors) {
                    setIsLoading(false);
                    return Swal.fire('Error', 'Invalid Credentials', 'error');
                };

                setIsLoading(false);
                setIsSelect(true);
                return;
            }
            Swal.fire('Error', 'Campos do formulario vazios', 'error')

        } catch (error) {
            throw new Error('Ocorreu um error ao realizar o login')
        }

    }

    return (
        <div className="front_formulario contenedor">
            <div className="container">
                <span className="error spaceTopSmall d-block text-center">{error && error}</span>
                <form onSubmit={handleLogin} className="formLogin spaceBottomSmall" >
                    <input type="text" name="email"
                        onChange={inputChange}
                        placeholder="Correo electrónico"
                        value={email}
                    />
                    <input type="password"
                        name="password"
                        onChange={inputChange}
                        placeholder="Password"
                        value={password}
                    />
                    <div className="forget_password">
                        <span>Forgot your password?</span>
                    </div>

                    <input type="submit" value={isLoading ? 'Loading...' : 'Start'} className="btn btn-login" />
				    <NavLink className="link_register" to="/auth/register">Register</NavLink>
                </form>
            </div>
        </div>
    );
}
