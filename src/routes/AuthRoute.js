import React from 'react'
<<<<<<< HEAD
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginScreen } from '../components/LoginScreen'
import { RegisterScreen } from '../components/RegisterScreen'
=======
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginScreen } from '../Pages/LoginScreen'
import { RegisterScreen } from '../Pages/RegisterScreen'
>>>>>>> login
import { Navbar } from '../components/Navbar'

export const AuthRouter = () => {
    return (
        <>
            <div>
            <Navbar />
<<<<<<< HEAD
                <Routes>
                    <Route exact path="/auth/login" component={LoginScreen} />
                    <Route exact path="/auth/registrarse" component={RegisterScreen} />
                    <Navigate to="/auth/login" />
                </Routes>
=======
                <Switch>
                    <Route exact path="/auth/login" component={LoginScreen} />
                    <Route exact path="/auth/registrarse" component={RegisterScreen} />
                    <Redirect to="/auth/login" />
                </Switch>
>>>>>>> login
            </div>
        </>
    )
}
