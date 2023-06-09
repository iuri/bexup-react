import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Routes,
    Navigate
} from "react-router-dom";
import { startChecking } from '../components/auth';

import { AuthRouter } from './authRoutes';
import { PrivateRouter } from './privateRoutes';


export const AppRoute = () => {

    const dispatch = useDispatch();
    const { isCheking ,uid} = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch])

    if (!isCheking) {
        return <h4>Carregando...</h4>;
    }
    return (
        <Router>
            <div>
                <Routes>
                    <PrivateRouter isAuthenticated={!!uid} path="/"
                        component={PrivateRouter} />
                    <Navigate to="/auth/login" />
                </Routes>
            </div>
        </Router>
    )
}

