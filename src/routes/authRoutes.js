import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginScreen } from '../components/Login'
import { RegisterScreen } from '../components/Register'
import { Navbar } from '../components/Navbar'

export const AuthRouter = () => {
    return (
        <>
            <div>
            <Navbar />
                <Routes>
                    <Route exact path="/auth/login" component={LoginScreen} />
                    <Route exact path="/auth/register" component={RegisterScreen} />
                    <Navigate to="/auth/login" />
                </Routes>
            </div>
        </>
    )
}
