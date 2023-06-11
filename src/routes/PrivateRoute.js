import React from 'react';
// React-router-dom
import { Route, Redirect } from 'react-router-dom';

export const PrivateRouter = ({ component: Component, isAuthenticated, ...rest }) => {
    return (
        <>
            {isAuthenticated ? <Route {...rest} render={props => (
                <Component {...props} />
            )} /> : <Redirect to="/auth/login" />}
        </>
    )
}
