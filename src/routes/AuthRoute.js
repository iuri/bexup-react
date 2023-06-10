import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginScreen } from '../components/LoginScreen'
import { RegisterScreen } from '../components/RegisterScreen'
import { Navbar } from '../components/Navbar'

export const AuthRouter = () => {
    return (
        <>
            <div>
            <Navbar />
                <Routes>
                    <Route exact path="/auth/login" component={LoginScreen} />
                    <Route exact path="/auth/registrarse" component={RegisterScreen} />
                    <Navigate to="/auth/login" />
                </Routes>
            </div>
        </>
    )
}
