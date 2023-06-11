import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
<<<<<<< HEAD
    Routes,
    Navigate
=======
    Switch,
    Redirect
>>>>>>> login
} from "react-router-dom";
import { startChecking } from '../actions/auth';

import { AuthRouter } from './AuthRoute';
import { DashboardRouter } from './DasboardRoute';
import { PublicRoute } from './PublicRoute';
import { PrivateRouter } from './PrivateRoute';


export const AppRoute = () => {

    const dispatch = useDispatch();
    const { isCheking ,uid} = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch])

    if (!isCheking) {
<<<<<<< HEAD
        return <h4>Cargando...</h4>;
=======
        return <h4>Loading...</h4>;
>>>>>>> login
    }
    return (
        <Router>

            <div>
<<<<<<< HEAD
                <Routes>
=======
                <Switch>
>>>>>>> login
                    <PublicRoute isAuthenticated={!!uid} path="/auth"
                        component={AuthRouter} />
                    <PrivateRouter isAuthenticated={!!uid} path="/"
                        component={DashboardRouter} />
<<<<<<< HEAD
                    <Navigate to="/auth/login" />
                </Routes>
=======
                    <Redirect to="/auth/login" />
                </Switch>
>>>>>>> login

            </div>

        </Router>
    )
}
