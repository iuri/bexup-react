import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginScreen } from '../Pages/LoginScreen'
import { RegisterScreen } from '../Pages/RegisterScreen'
import { Navbar } from '../components/Navbar'

export const AuthRouter = () => {
    return (
        <>
            <div>
            <Navbar />
                <Switch>
                    <Route exact path="/auth/login" component={LoginScreen} />
                    <Route exact path="/auth/registrarse" component={RegisterScreen} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </>
    )
}
